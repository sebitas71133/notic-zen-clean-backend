import { Request, RequestHandler, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";

import { CreateSubNoteSchema } from "../dtos/subnote/create-subnote.dto";

import { PaginationSubNoteSchema } from "../dtos/subnote/pagination-subnote";
import { SaveSubNoteSchema } from "../dtos/subnote/save-subnote.dto";
import { SubNoteService } from "../../application/services/subnote.service";
import { NoteService } from "../../application/services/note.service";
import { ImageService } from "../../application/services/Image.service";
import { Uuid } from "../../shared/adapters.ts/uuid";

export class SubNoteController {
  //DI ?
  constructor(
    private readonly subNoteService: SubNoteService,
    private readonly noteService: NoteService,
    private readonly imageService: ImageService
  ) {} // private readonly imageService: ImageService // private readonly noteService: NoteService,

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public createSubNote: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    try {
      const user = req.body.user;
      const payload = req.body;
      const { noteId } = req.params;

      const result = CreateSubNoteSchema.safeParse({ ...payload, noteId });

      if (!result.success) {
        const message = result.error.errors[0].message;

        throw CustomError.badRequest(message);
      }

      const newNote = await this.subNoteService.createSubNote(
        user.id,
        result.data
      );

      return res.status(201).json({
        success: true,
        message: "Subnota registrada con éxito",
        data: newNote,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public saveSubNoteById = async (req: Request, res: Response) => {
    try {
      const payload = req.body;

      const { noteId, subNoteId } = req.params;

      const userId = req.body.user.id;

      const result = SaveSubNoteSchema.safeParse({
        ...payload,
        noteId,
        subNoteId,
      });

      if (!result.success) {
        const message = result.error.errors[0].message;

        throw CustomError.badRequest(message);
      }

      // throw new Error();
      const newNote = await this.subNoteService.saveSubNote(
        subNoteId,
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

  public getSubNotesByNoteId = async (req: Request, res: Response) => {
    try {
      // const dto = PaginationNoteDTO.createDTO(req.query);

      const user = req.body.user;

      const payload = req.query;

      const { noteId } = req.params;

      const result = PaginationSubNoteSchema.safeParse({ ...payload, noteId });

      if (!result.success) {
        const message = result.error.errors[0].message;

        throw CustomError.badRequest(message);
      }

      const dto = result.data;

      const note = await this.noteService.getNoteById(dto.noteId, user.id);

      const notes = await this.subNoteService.getSubNotesByNoteId(
        dto.page,
        dto.limit,
        dto.noteId,
        dto.tagId,
        dto.isArchived,
        dto.isPinned,
        dto.sortDate,
        dto.sortTitle
      );

      return res.status(200).json({
        success: true,
        message: `subnotas registradas del usuario ${user.email}`,
        ...dto,
        data: notes ?? [], //Por si acaso xd
      });
    } catch (error) {
      // console.log(error);
      this.handleError(error, res);
    }
  };

  public getAllSubNotesByUserId = async (req: Request, res: Response) => {
    try {
      // const dto = PaginationNoteDTO.createDTO(req.query);

      const user = req.body.user;

      const userId = user.id;

      const notes = await this.subNoteService.getAllSubNotesByUserId(userId);

      return res.status(200).json({
        success: true,
        message: `subnotas registradas del usuario ${user.email}`,
        userId,
        data: notes ?? [], //Por si acaso xd
      });
    } catch (error) {
      // console.log(error);
      this.handleError(error, res);
    }
  };

  public deleteSubNoteById = async (req: Request, res: Response) => {
    try {
      const { subNoteId, noteId } = req.params;
      const user = req.body.user;

      if (!Uuid.isUUID(subNoteId) || !subNoteId) {
        throw CustomError.badRequest("Invalid or missing subNoteId");
      }

      if (!Uuid.isUUID(noteId) || !noteId) {
        throw CustomError.badRequest("Invalid or missing noteId");
      }

      await this.subNoteService.deleteSubNoteById(subNoteId, user.id);
      return res.status(200).json({
        success: true,
        message: "Subnote eliminada",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getSubNoteById = async (req: Request, res: Response) => {
    try {
      const { subNoteId } = req.params;

      const user = req.body.user;

      const subNote = await this.subNoteService.getSubNoteById(
        subNoteId,
        user.id
      );
      return res.status(200).json({
        success: true,
        message: "SubNota encontrada",
        data: subNote, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public cleanOrphanSubImages = async (req: Request, res: Response) => {
    try {
      await this.imageService.cleanOrphanSubImages();
      return res.status(200).json({
        success: true,
        message: "Imágenes de subNotas huérfanas eliminadas de Cloudinary.",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getAllSubImages = async (req: Request, res: Response) => {
    try {
      const result = await this.imageService.getAllSubImages();
      return res.status(200).json({
        data: result,
        success: true,
        message: "Imágenes de subNotas huérfanas eliminadas de Cloudinary.",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
