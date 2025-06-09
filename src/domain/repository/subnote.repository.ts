import { SubNoteImageEntity } from "../entities/subImage.entitie";
import { SubNoteEntity } from "../entities/subnote.entitie";

export abstract class SubNoteRepository {
  abstract createSubNote(subnote: SubNoteEntity): Promise<SubNoteEntity>;

  abstract getSubNotesByNoteId(
    page: number,
    limit: number,
    noteId: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<SubNoteEntity[]>;

  abstract getSubNoteById(
    id: string,
    userId: string
  ): Promise<SubNoteEntity | null>;

  abstract saveSubNoteById(
    subNoteId: string,
    userId: string,
    updates: Partial<SubNoteEntity>
  ): Promise<SubNoteEntity>;

  // abstract deleteNoteById(id: string): Promise<void>;

  abstract clearTags(subNoteId: string): Promise<void>;

  abstract addTagsToSubNote(subNoteId: string, tagIds: string[]): Promise<void>;

  abstract clearImages(subNoteId: string): Promise<void>;

  abstract addImagesToSubNote(
    noteId: string,
    images: SubNoteImageEntity[]
  ): Promise<void>;

  abstract isValidUserToEditSubNote(
    subNoteId: string,
    userId: string
  ): Promise<boolean>;
}
