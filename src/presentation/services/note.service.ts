import { BycripAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { Uuid } from "../../config/uuid";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { NoteEntity } from "../../domain/entities/note.entitie";
import { NoteRepository } from "../../domain/repository/note.repository";
import { SaveNoteDTO } from "../dtos/note/save-note.dto";
import { NoteImageEntity } from "../../domain/entities/image.entitie";
import { TagEntity } from "../../domain/entities/tagEntity";

export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  createNote = async (userId: string) => {
    try {
      //2. Crear Entidad

      const noteEntity = NoteEntity.create({
        userId: userId,
      });

      const newNote = await this.noteRepository.createNote(noteEntity);

      return newNote;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving category");
    }
  };

  getNotesById = async (
    page: number,
    limit: number,
    userId: string
  ): Promise<NoteEntity[]> => {
    try {
      const notes = await this.noteRepository.getNotesByUserId(
        page,
        limit,
        userId
      );
      console.log(notes);
      return notes ?? [];
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error fetching notes");
    }
  };

  getNoteById = async (
    noteId: string,
    userId: string
  ): Promise<Partial<NoteEntity>> => {
    try {
      const note = await this.noteRepository.getNoteById(noteId, userId);

      if (!note) throw CustomError.notFound(`Note not found by id: ${noteId}`);

      return note ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching note");
    }
  };

  saveNote = async (
    noteId: string,
    dto: Partial<SaveNoteDTO>,
    userId: string
  ): Promise<NoteEntity> => {
    try {
      const images = dto.images?.map((img) =>
        NoteImageEntity.create({
          url: img.url,
          altText: img.altText ?? "", // asegúrate de que altText no sea undefined si es requerido
          noteId: noteId, // asegúrate de pasar el noteId
        })
      );

      const tags = dto.tags?.map((tag) =>
        TagEntity.create({
          name: tag.name,
          userId: userId, // asegúrate de pasar el userId
        })
      );

      const validEntity = NoteEntity.updated({
        ...dto,
        images,
        tags,
      });
      console.log(validEntity);
      // await this.categoryRepository.updateCategoryById(id, validEntity);

      const updatedCategory = await this.noteRepository.saveNoteById(
        noteId,
        userId,
        validEntity
      );

      if (!updatedCategory)
        throw CustomError.notFound(`Category not found by id: ${noteId}`);

      return updatedCategory ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching notes");
    }
  };

  // deleteCategoryById = async (id: string, user: UserEntity): Promise<void> => {
  //   try {
  //     const category = await this.categoryRepository.getCategoryById(id);

  //     if (!category) {
  //       throw CustomError.badRequest("Categoría no encontrada");
  //     }

  //     if (category.user.id !== user.id) {
  //       throw CustomError.forbidden(
  //         "No tienes permiso para modificar esta categoría"
  //       );
  //     }

  //     await this.categoryRepository.deleteCategoryById(id);
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     throw CustomError.internalServer("Error deleting categorie");
  //   }
  // };
}
