import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { NoteEntity } from "../../domain/entities/note.entitie";
import { NoteRepository } from "../../domain/repository/note.repository";
import { SaveNoteDTO } from "../dtos/note/save-note.dto";
import { NoteImageEntity } from "../../domain/entities/image.entitie";
import { TagService } from "./tags.service";
import { CreateImageDto } from "../dtos/image/create-image.dto";
import { CreateNoteDTO } from "../dtos/note/create-note.dto";
import { ImageService } from "./Image.service";

export class NoteService {
  constructor(
    private readonly tagService: TagService,
    private readonly noteRepository: NoteRepository,
    private readonly imageService: ImageService
  ) {}

  createNote = async (userId: string, dto: CreateNoteDTO) => {
    try {
      //2. Crear Entidad

      const noteEntity = NoteEntity.create({
        userId: userId,
        ...dto,
      });

      const tagIds = dto.tags ?? [];
      const imagesD = (dto.images as CreateImageDto[]) ?? [];

      const newNote = await this.noteRepository.createNote(noteEntity);

      const noteId = newNote.id;

      // 3. Tags
      await this.noteRepository.clearTags(noteId);
      if (tagIds.length) {
        await this.noteRepository.addTagsToNote(noteId, tagIds);
      }

      const processedImages = await this.imageService.processImages(
        imagesD,
        "note"
      );

      // 4. Imágenes
      await this.noteRepository.clearImages(noteId);
      if (imagesD.length) {
        const imagesEntity = processedImages.map((img) =>
          NoteImageEntity.create({
            url: img.url,
            altText: img.altText,
            noteId,
            publicId: img.publicId,
          })
        );
        await this.noteRepository.addImagesToNote(noteId, imagesEntity);
      }

      // 5. Nota actualizada
      return await this.noteRepository.getNoteById(noteId, userId);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving category");
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

      const processedImages = await this.imageService.processImages(
        imagesD,
        "note"
      );

      // 4. Imágenes
      await this.noteRepository.clearImages(noteId);
      if (imagesD.length) {
        const imagesEntity = processedImages.map((img) =>
          NoteImageEntity.create({
            url: img.url,
            altText: img.altText,
            noteId,
            publicId: img.publicId,
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

  getNotesById = async (
    page: number,
    limit: number,
    userId: string,
    categoryId?: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<NoteEntity[]> => {
    try {
      const notes = await this.noteRepository.getNotesByUserId(
        page,
        limit,
        userId,
        categoryId,
        tagId,
        isArchived,
        isPinned,
        sortDate,
        sortTitle
      );

      // const i = notes.images;

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

      if (!note)
        throw CustomError.unauthorized(
          `No tienes permisos para acceder a estas notas`
        );

      return note;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching note");
    }
  };

  deleteNoteById = async (id: string, user: UserEntity): Promise<void> => {
    try {
      const tag = await this.noteRepository.getNoteById(id, user.id);

      if (!tag) {
        throw CustomError.badRequest("Note no encontrada o no tienes permisos");
      }

      await this.noteRepository.deleteNoteById(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error deleting note");
    }
  };

  getTotals = async (userId: string) => {
    try {
      const documents = await this.noteRepository.getTotals(userId);

      return documents;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error generating token");
    }
  };
}
