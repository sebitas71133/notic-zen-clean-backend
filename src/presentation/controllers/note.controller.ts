import { Request, RequestHandler, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateCategoryDto } from "../dtos/category/create-category.dto";
import { CategoryService } from "../services/category.service";

import { Uuid } from "../../config/uuid";
import { UpdateCategoryDTO } from "../dtos/category/update-category.dto";
import { PaginationCategoryDTO } from "../dtos/category/pagination-category";
import { CreateNoteDTO } from "../dtos/note/create-note.dto";
import { NoteService } from "../services/note.service";
import { PaginationTagDTO } from "../dtos/tags/pagination-tag";
import { SaveNoteDTO } from "../dtos/note/save-note.dto";

export class NoteController {
  //DI ?
  constructor(private readonly noteService: NoteService) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public createNote: RequestHandler = async (req: Request, res: Response) => {
    try {
      const user = req.body.user;

      const data = req.body;

      const newNotedDTO = CreateNoteDTO.createDTO(data);

      const newNote = await this.noteService.createNote(user.id, newNotedDTO);

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
      const data = req.body;

      const noteId = req.params["id"];

      const userId = req.body.user.id;

      const newNotedDTO = SaveNoteDTO.createDTO(data);

      // throw new Error();
      const newNote = await this.noteService.saveNote(
        noteId,
        newNotedDTO,
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
      const dto = PaginationTagDTO.createDTO(req.query);

      const user = req.body.user;

      const notes = await this.noteService.getNotesById(
        dto.page,
        dto.limit,
        user.id
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

  // public deleteUserById = async (req: Request, res: Response) => {
  //   try {
  //     const id = req.params["id"];
  //     const user = req.body.user;

  //     if (!Uuid.isUUID(id) || !id) {
  //       throw CustomError.badRequest("Invalid or missing category ID");
  //     }

  //     await this.categoryService.deleteCategoryById(id, user);
  //     return res.status(200).json({
  //       success: true,
  //       message: "Categoria eliminada",
  //     });
  //   } catch (error) {
  //     this.handleError(error, res);
  //   }
  // };

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
}
