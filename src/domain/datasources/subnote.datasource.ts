import { SaveSubNoteDTO } from "../../presentation/dtos/subnote/save-subnote.dto";
import { SubNoteImageEntity } from "../entities/subImage.entitie";
import { SubNoteEntity } from "../entities/subnote.entitie";

export abstract class SubNoteDataSource {
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
    // userId: string,
    updates: SaveSubNoteDTO
  ): Promise<SubNoteEntity>;

  abstract canUserEditSubNote(noteId: string, userId: string): Promise<boolean>;

  abstract deleteSubNoteById(subNoteId: string): Promise<void>;

  abstract clearTags(subNoteId: string): Promise<void>;

  abstract addTagsToSubNote(subNoteId: string, tagIds: string[]): Promise<void>;

  abstract clearImages(subNoteId: string): Promise<void>;

  abstract addImagesToSubNote(
    subNoteId: string,
    images: SubNoteImageEntity[]
  ): Promise<void>;

  abstract isValidUserToEditSubNote(
    subNoteId: string,
    userId: string
  ): Promise<boolean>;

  abstract getAllSubNotesByUserId(userId: string): Promise<SubNoteEntity[]>;
}
