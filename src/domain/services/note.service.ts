import { CreateNoteDTO } from "../../presentation/dtos/note/create-note.dto";
import { UpdateNoteDTO } from "../../presentation/dtos/note/save-note.dto";
import { NoteEntity } from "../entities/note.entitie";
import { UserEntity } from "../entities/user.entitie";

export interface INoteService {
  createNote(userId: string, dto: CreateNoteDTO): Promise<NoteEntity | null>;
  saveNote(
    noteId: string,
    dto: Partial<UpdateNoteDTO>,
    userId: string
  ): Promise<NoteEntity | null>;
  getNotesById(
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
  getNoteById(noteId: string, userId: string): Promise<Partial<NoteEntity>>;
  deleteNoteById(id: string, user: UserEntity): Promise<void>;
  getTotals(userId: string): Promise<any>;
}
