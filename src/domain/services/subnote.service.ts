import { CreateSubNoteDTO } from "../../presentation/dtos/subnote/create-subnote.dto";
import { SaveSubNoteDTO } from "../../presentation/dtos/subnote/save-subnote.dto";
import { SubNoteEntity } from "../entities/subnote.entitie";

export interface ISubNoteService {
  createSubNote(
    userId: string,
    dto: CreateSubNoteDTO
  ): Promise<SubNoteEntity | null>;
  saveSubNote(
    subNoteId: string,
    dto: SaveSubNoteDTO,

    userId: string
  ): Promise<SubNoteEntity | null>;
  getSubNotesByNoteId(
    page: number,
    limit: number,
    noteId: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<SubNoteEntity[]>;
  getAllSubNotesByUserId(userId: string): Promise<SubNoteEntity[]>;

  getAllSubNotesByUserId(userId: string): Promise<SubNoteEntity[]>;

  getSubNoteById(subNoteId: string, userId: string): Promise<SubNoteEntity>;

  deleteSubNoteById(subNoteId: string, userId: string): Promise<void>;
}
