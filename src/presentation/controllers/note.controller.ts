import { Request, RequestHandler, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";

import { CreateNoteDTO, CreateNoteSchema } from "../dtos/note/create-note.dto";

import { PaginationNoteDTO } from "../dtos/note/pagination-note";

import { Uuid } from "../../shared/adapters.ts/uuid";
import { INoteService } from "../../domain/services/note.service";
import { IImageService } from "../../domain/services/image.service";
import { UpdateNoteSchema } from "../dtos/note/save-note.dto";
import { ShareNoteSchema } from "../dtos/note/share-note.dto";

import { prismaClient } from "../../data/prisma/init";
import { UpdateShareRoleSchema } from "../dtos/note/share-update.dto";
import { SocketService } from "../../application/services/socket.service";

export class NoteController {
  //DI ?
  constructor(
    private readonly noteService: INoteService,
    private readonly imageService: IImageService
  ) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public createNote: RequestHandler = async (req: Request, res: Response) => {
    try {
      const userId = req.body.user.id;

      const payload = req.body;

      console.log({ payload });

      const result = CreateNoteSchema.safeParse({ ...payload, userId });

      if (!result.success) {
        const message = result.error.errors[0].message;

        throw CustomError.badRequest(message);
      }

      const newNote = await this.noteService.createNote(userId, result.data);

      return res.status(201).json({
        success: true,
        message: "Nota registrada con éxito",
        data: newNote,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public shareNote: RequestHandler = async (req, res) => {
    try {
      const owner = req.body.user;
      const ownerId = req.body.user.id;
      const { email, role } = ShareNoteSchema.parse(req.body);
      const { noteId } = req.params;

      const note = await prismaClient.note.findUnique({
        where: { id: noteId },
        include: { images: true },
      });
      if (!note) throw CustomError.notFound("Note not found");
      if (note.user_id !== ownerId)
        throw CustomError.forbidden("You are not the owner of this note");

      const recipient = await prismaClient.user.findUnique({
        where: { email },
      });
      if (!recipient) throw CustomError.notFound("User not found");

      const alreadyShared = await prismaClient.noteShare.findFirst({
        where: { noteId, userId: recipient.id },
      });
      if (alreadyShared)
        throw CustomError.badRequest(
          "This note is already shared with this user"
        );

      await prismaClient.noteShare.create({
        data: { noteId, userId: recipient.id, role },
      });

      //CREAR LA NOTIFICACION
      // Necesario email, type, message, nodeId()

      const notification = await prismaClient.notification.create({
        data: {
          userId: recipient.id,
          senderId: ownerId,
          type: "SHARE_NOTE",
          message: "Nota compartida",
          noteId,
        },
      });

      // Emitimos evento en tiempo real 👇
      SocketService.getInstance().emitToUser(recipient.id, "note:shared", {
        id: notification.id,
        type: notification.type,
        message: notification.message,
        senderId: notification.senderId,
        noteId: notification.noteId,
        createdAt: notification.createdAt,
        role,
        noteTitle: note.title,
        noteImage: note.images?.[0]?.url ?? null,
        senderName: owner?.name,
        senderEmail: owner?.email,
      });

      return res.status(200).json({
        success: true,
        message: "Nota compartida con éxito",
        data: { noteId, sharedWith: email, role },
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public updateShareRole: RequestHandler = async (req, res) => {
    try {
      const ownerId = req.body.user.id;
      const { role } = UpdateShareRoleSchema.parse(req.body);

      const { noteId, userId } = req.params;

      // 1. Validar nota
      const note = await prismaClient.note.findUnique({
        where: { id: noteId },
      });
      if (!note) throw CustomError.notFound("Note not found");
      if (note.user_id !== ownerId)
        throw CustomError.forbidden("You are not the owner of this note");

      // 2. Buscar relación de compartido
      const shared = await prismaClient.noteShare.findFirst({
        where: { noteId, userId },
      });
      if (!shared)
        throw CustomError.notFound(
          "This user does not have access to this note"
        );

      // 3. Actualizar rol
      const updatedShare = await prismaClient.noteShare.update({
        where: { id: shared.id },
        data: { role },
      });

      // Emitimos evento en tiempo real 👇
      SocketService.getInstance().emitToUser(userId, "note:role", {
        note: note.title,

        role,
      });

      return res.status(200).json({
        success: true,
        message: "Role updated successfully",
        data: {
          noteId,
          userId,
          newRole: updatedShare.role,
        },
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public deleteShare: RequestHandler = async (req, res) => {
    try {
      const ownerId = req.body.user.id;
      const { noteId, userId } = req.params;

      // 1. Validar nota
      const note = await prismaClient.note.findUnique({
        where: { id: noteId },
      });
      if (!note) throw CustomError.notFound("Note not found");
      if (note.user_id !== ownerId)
        throw CustomError.forbidden("You are not the owner of this note");

      // 2. Buscar relación de compartido
      const shared = await prismaClient.noteShare.findFirst({
        where: { noteId, userId },
      });
      if (!shared)
        throw CustomError.notFound(
          "This user does not have access to this note"
        );

      // 3. Eliminar relación
      await prismaClient.noteShare.delete({
        where: { id: shared.id },
      });

      SocketService.getInstance().emitToUser(userId, "note:revoked", {
        noteId,
        title: note.title,
        revokedBy: req.body.user.email, // opcional: quién lo revocó
      });

      return res.status(200).json({
        success: true,
        message: "Access revoked successfully",
        data: { noteId, userId },
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getSharedUsersByNote = async (req: Request, res: Response) => {
    try {
      const noteId = req.params["noteId"];
      const userId = req.body.user.id;

      // 1. Buscar la nota
      const note = await prismaClient.note.findUnique({
        where: { id: noteId },
        include: {
          NoteShare: {
            include: {
              user: {
                select: {
                  id: true,
                  email: true,
                },
              },
            },
          },
        },
      });

      if (!note) {
        throw CustomError.notFound("Note not found");
      }

      // 2. Validar que el que consulta sea el dueño
      if (note.user_id !== userId) {
        throw CustomError.forbidden("You are not the owner of this note");
      }

      // 3. Armar respuesta con usuarios y roles
      const sharedUsers = note.NoteShare.map((share) => ({
        id: share.user.id,
        email: share.user.email,
        role: share.role,
      }));

      return res.status(200).json({
        success: true,
        data: sharedUsers,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public saveNoteById = async (req: Request, res: Response) => {
    try {
      const payload = req.body;
      const noteId = req.params["id"];
      const userId = req.body.user.id;

      const result = UpdateNoteSchema.safeParse({ ...payload, userId });

      if (!result.success) {
        const message = result.error.errors[0].message;
        throw CustomError.badRequest(message);
      }

      // Guardar cambios
      const newNote = await this.noteService.saveNote(
        noteId,
        result.data,
        userId
      );

      // Buscar nota con shares y dueño
      const noteWithShares = await prismaClient.note.findUnique({
        where: { id: noteId },
        include: {
          NoteShare: true,
          user: true, // incluir dueño
        },
      });

      if (noteWithShares) {
        const recipients = noteWithShares.NoteShare.map((s) => s.userId);

        // 🔹 Todos los receptores (dueño + compartidos)
        const allRecipients = new Set([...recipients, noteWithShares.user_id]);

        allRecipients.forEach(async (uid) => {
          if (uid !== userId) {
            // Emitir evento en tiempo real
            SocketService.getInstance().emitToUser(uid, "note:updated", {
              ...newNote,
              currentUser: req.body.user, // para mostrar quién lo editó
            });

            // 🔹 Si es el dueño, crear notificación persistente
            if (uid === noteWithShares.user_id) {
              const notification = await prismaClient.notification.create({
                data: {
                  userId: uid, // dueño
                  senderId: userId, // quien editó
                  type: "COMMENT",
                  message: `La nota "${newNote?.title}" fue actualizada`,
                  noteId,
                },
              });
            }
          }
        });
      }

      return res.status(200).json({
        success: true,
        message: "Note actualizada",
        data: newNote,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getNotesById = async (req: Request, res: Response) => {
    try {
      const dto = PaginationNoteDTO.createDTO(req.query);

      const user = req.body.user;

      const notes = await this.noteService.getNotesById(
        dto.page,
        dto.limit,
        user.id,
        dto.categoryId,
        dto.tagId,
        dto.isArchived,
        dto.isPinned,
        dto.sortDate,
        dto.sortTitle
      );

      return res.status(200).json({
        success: true,
        message: `notes registradas del usuario ${user.email}`,
        ...dto,
        data: notes ?? [], //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public deleteNoteById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];
      const user = req.body.user;

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing category ID");
      }

      await this.noteService.deleteNoteById(id, user);
      return res.status(200).json({
        success: true,
        message: "Categoria eliminada",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getNoteById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];

      // if (!Uuid.isUUID(id) || !id) {
      //   throw CustomError.badRequest("Invalid or missing note ID");
      // }

      const user = req.body.user ?? "user-123";

      const note = await this.noteService.getNoteById(id, user.id);
      return res.status(200).json({
        success: true,
        message: "Note encontrada",
        data: note, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getTotals = async (req: Request, res: Response) => {
    try {
      const user = req.body.user;

      const documents = await this.noteService.getTotals(user.id);

      return res.status(200).json({
        success: true,
        message: "Documentos totales",
        data: documents,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public cleanOrphanImages = async (req: Request, res: Response) => {
    try {
      await this.imageService.cleanOrphanImages();
      return res.status(200).json({
        success: true,
        message: "Imágenes huérfanas eliminadas de Cloudinary.",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getAllImages = async (req: Request, res: Response) => {
    try {
      const result = await this.imageService.getAllImages();
      return res.status(200).json({
        data: result,
        success: true,
        message: "Imágenes huérfanas eliminadas de Cloudinary.",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
