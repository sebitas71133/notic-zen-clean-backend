import { NoteDataSource } from "../../domain/datasources/note.datasource";

import { NoteImageEntity } from "../../domain/entities/image.entitie";
import { NoteEntity } from "../../domain/entities/note.entitie";

import { NoteRepository } from "../../domain/repository/note.repository";
import { UpdateNoteDTO } from "../../presentation/dtos/note/save-note.dto";

export class NoteRepositoryImpl implements NoteRepository {
  constructor(private readonly noteDataSource: NoteDataSource) {}
  createNote(note: NoteEntity): Promise<NoteEntity> {
    return this.noteDataSource.createNote(note);
  }
  getNotesByUserId(
    page: number,
    limit: number,
    userId: string,
    categoryId?: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<NoteEntity[]> {
    return this.noteDataSource.getNotesByUserId(
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
  }

  getNoteById(noteId: string, userId: string): Promise<NoteEntity | null> {
    return this.noteDataSource.getNoteById(noteId, userId);
  }
  saveNoteById(
    noteId: string,
    // userId: string,
    updates: UpdateNoteDTO
  ): Promise<NoteEntity> {
    return this.noteDataSource.saveNoteById(noteId, updates);
  }
  deleteNoteById(id: string): Promise<void> {
    return this.noteDataSource.deleteNoteById(id);
  }

  clearTags(noteId: string): Promise<void> {
    return this.noteDataSource.clearTags(noteId);
  }

  addTagsToNote(noteId: string, tagIds: string[]): Promise<void> {
    return this.noteDataSource.addTagsToNote(noteId, tagIds);
  }

  getTotals(userId: string): Promise<any> {
    return this.noteDataSource.getTotals(userId);
  }

  clearImages(noteId: string): Promise<void> {
    return this.noteDataSource.clearImages(noteId);
  }

  addImagesToNote(noteId: string, images: NoteImageEntity[]): Promise<void> {
    return this.noteDataSource.addImagesToNote(noteId, images);
  }

  canUserEditNote(noteId: string, userId: string): Promise<boolean> {
    return this.noteDataSource.canUserEditNote(noteId, userId);
  }
}
