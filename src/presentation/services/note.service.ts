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
import { TagService } from "./tags.service";
import { CreateTagDto } from "../dtos/tags/create-tag.dto";
import { CreateImageDto } from "../dtos/image/create-image.dto";

export class NoteService {
  constructor(
    private readonly tagService: TagService,
    private readonly noteRepository: NoteRepository
  ) {}

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
  ): Promise<NoteEntity | null> => {
    try {
      const note = await this.noteRepository.getNoteById(noteId, userId);
      if (!note) throw CustomError.forbidden("No tienes permiso sobre la nota");

      // 1. Actualizar nota principal
      const noteEntity = NoteEntity.updated(dto);
      await this.noteRepository.saveNoteById(noteId, userId, noteEntity);

      // 2. Normalizar colecciones
      const tagIds = dto.tagIds ?? [];
      const imagesD = dto.images as CreateImageDto[];

      // 3. Tags
      await this.noteRepository.clearTags(noteId);
      if (tagIds.length) {
        await this.noteRepository.addTagsToNote(noteId, tagIds);
      }

      // 4. Imágenes
      await this.noteRepository.clearImages(noteId);
      if (imagesD.length) {
        const imagesEntity = imagesD.map((img) =>
          NoteImageEntity.create({
            url: img.url,
            altText: img.altText,
            noteId,
          })
        );
        await this.noteRepository.addImagesToNote(noteId, imagesEntity);
      }

      // 5. Nota actualizada
      return await this.noteRepository.getNoteById(noteId, userId);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving note");
    }
  };
}
