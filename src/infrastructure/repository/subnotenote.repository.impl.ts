import { CategoryDataSource } from "../../domain/datasources/category.datasource";
import { NoteDataSource } from "../../domain/datasources/note.datasource";
import { SubNoteDataSource } from "../../domain/datasources/subnote.datasource";

import { CategoryEntity } from "../../domain/entities/categories.entitie";
import { NoteImageEntity } from "../../domain/entities/image.entitie";
import { NoteEntity } from "../../domain/entities/note.entitie";
import { SubNoteImageEntity } from "../../domain/entities/subImage.entitie";
import { SubNoteEntity } from "../../domain/entities/subnote.entitie";
import { UserEntity } from "../../domain/entities/user.entitie";

import { CategoryRepository } from "../../domain/repository/category.repository";
import { NoteRepository } from "../../domain/repository/note.repository";
import { SubNoteRepository } from "../../domain/repository/subnote.repository";

export class SubNoteRepositoryImpl implements SubNoteRepository {
  constructor(private readonly subNoteDataSource: SubNoteDataSource) {}

  createSubNote(subnote: SubNoteEntity): Promise<SubNoteEntity> {
    return this.subNoteDataSource.createSubNote(subnote);
  }
  getSubNotesByNoteId(
    page: number,
    limit: number,
    noteId: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<SubNoteEntity[]> {
    return this.subNoteDataSource.getSubNotesByNoteId(
      page,
      limit,
      noteId,
      tagId,
      isArchived,
      isPinned,
      sortDate,
      sortTitle
    );
  }

  getSubNoteById(
    subNoteId: string,
    userId: string
  ): Promise<SubNoteEntity | null> {
    return this.subNoteDataSource.getSubNoteById(subNoteId, userId);
  }
  saveSubNoteById(
    subNoteId: string,
    userId: string,
    updates: Partial<SubNoteEntity>
  ): Promise<SubNoteEntity> {
    return this.subNoteDataSource.saveSubNoteById(subNoteId, userId, updates);
  }
  deleteSubNoteById(subNoteId: string): Promise<void> {
    return this.subNoteDataSource.deleteSubNoteById(subNoteId);
  }

  clearTags(subNoteId: string): Promise<void> {
    return this.subNoteDataSource.clearTags(subNoteId);
  }

  addTagsToSubNote(subNoteId: string, tagIds: string[]): Promise<void> {
    return this.subNoteDataSource.addTagsToSubNote(subNoteId, tagIds);
  }

  clearImages(subNoteId: string): Promise<void> {
    return this.subNoteDataSource.clearImages(subNoteId);
  }

  addImagesToSubNote(
    subNoteId: string,
    images: SubNoteImageEntity[]
  ): Promise<void> {
    return this.subNoteDataSource.addImagesToSubNote(subNoteId, images);
  }

  isValidUserToEditSubNote(
    subNoteId: string,
    userId: string
  ): Promise<boolean> {
    return this.subNoteDataSource.isValidUserToEditSubNote(subNoteId, userId);
  }
}
