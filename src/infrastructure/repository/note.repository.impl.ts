import { CategoryDataSource } from "../../domain/datasources/category.datasource";
import { NoteDataSource } from "../../domain/datasources/note.datasource";

import { CategoryEntity } from "../../domain/entities/categories.entitie";
import { NoteImageEntity } from "../../domain/entities/image.entitie";
import { NoteEntity } from "../../domain/entities/note.entitie";
import { UserEntity } from "../../domain/entities/user.entitie";

import { CategoryRepository } from "../../domain/repository/category.repository";
import { NoteRepository } from "../../domain/repository/note.repository";

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
    isPinned?: string
  ): Promise<NoteEntity[]> {
    return this.noteDataSource.getNotesByUserId(
      page,
      limit,
      userId,
      categoryId,
      tagId,
      isArchived,
      isPinned
    );
  }

  getNoteById(noteId: string, userId: string): Promise<NoteEntity | null> {
    return this.noteDataSource.getNoteById(noteId, userId);
  }
  saveNoteById(
    noteId: string,
    userId: string,
    updates: Partial<NoteEntity>
  ): Promise<NoteEntity> {
    return this.noteDataSource.saveNoteById(noteId, userId, updates);
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

  clearImages(noteId: string): Promise<void> {
    return this.noteDataSource.clearImages(noteId);
  }

  addImagesToNote(noteId: string, images: NoteImageEntity[]): Promise<void> {
    return this.noteDataSource.addImagesToNote(noteId, images);
  }
}
