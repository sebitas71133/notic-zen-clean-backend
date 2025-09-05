import { Request, RequestHandler, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";

import { CreateNoteDTO, CreateNoteSchema } from "../dtos/note/create-note.dto";

import { PaginationNoteDTO } from "../dtos/note/pagination-note";

import { Uuid } from "../../shared/adapters.ts/uuid";
import { INoteService } from "../../domain/services/note.service";
import { IImageService } from "../../domain/services/image.service";
import { UpdateNoteSchema } from "../dtos/note/save-note.dto";

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

      // throw new Error();
      const newNote = await this.noteService.saveNote(
        noteId,
        result.data,
        userId
      );

      return res.status(200).json({
        success: true,
        message: "Note actualizada",
        data: newNote, //Por si acaso xd
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
