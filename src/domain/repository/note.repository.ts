import { UpdateNoteDTO } from "../../presentation/dtos/note/save-note.dto";
import { NoteImageEntity } from "../entities/image.entitie";
import { NoteEntity } from "../entities/note.entitie";

export abstract class NoteRepository {
  abstract createNote(note: NoteEntity): Promise<NoteEntity>;

  abstract getNotesByUserId(
    page: number,
    limit: number,
    userId: string,
    categoryId?: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<NoteEntity[]>;

  abstract getNoteById(id: string, userId: string): Promise<NoteEntity | null>;

  abstract saveNoteById(
    noteId: string,
    userId: string,
    updates: UpdateNoteDTO
  ): Promise<NoteEntity>;

  abstract deleteNoteById(id: string): Promise<void>;

  abstract clearTags(noteId: string): Promise<void>;

  abstract addTagsToNote(noteId: string, tagIds: string[]): Promise<void>;

  abstract getTotals(userId: string): Promise<any>;

  abstract clearImages(noteId: string): Promise<void>;

  abstract addImagesToNote(
    noteId: string,
    images: NoteImageEntity[]
  ): Promise<void>;
}
