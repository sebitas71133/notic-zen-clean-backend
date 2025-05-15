import { NoteEntity } from "../entities/note.entitie";
import { UserEntity } from "../entities/user.entitie";

export abstract class NoteDataSource {
  abstract createNote(note: NoteEntity): Promise<NoteEntity>;

  abstract getNotesByUserId(
    page: number,
    limit: number,
    userId: string
  ): Promise<NoteEntity[]>;

  abstract getNoteById(id: string, userId: string): Promise<NoteEntity | null>;

  abstract saveNoteById(
    noteId: string,
    userId: string,
    updates: Partial<NoteEntity>
  ): Promise<NoteEntity>;

  abstract deleteNoteById(id: string): Promise<void>;
}
