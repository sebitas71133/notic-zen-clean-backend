// src/domain/entities/subnote.entity.ts

import { Uuid } from "../../shared/adapters.ts/uuid";
import { CustomError } from "../errors/custom.error";

import { SubNoteImageEntity } from "./subImage.entitie";
import { TagEntity } from "./tagEntity";

interface SubNoteProps {
  id: string;
  title: string;
  description?: string | null;
  code?: string | null;
  noteId: string;
  tags?: TagEntity[];
  images?: SubNoteImageEntity[];
  createdAt?: Date;
  updatedAt?: Date;
  isArchived?: boolean;
  isPinned?: boolean;
}

export class SubNoteEntity {
  public readonly id: string;
  public title: string;
  public description?: string | null;
  public code?: string | null;
  public noteId: string;
  public tags: TagEntity[];
  public images: SubNoteImageEntity[];
  public readonly createdAt?: Date;
  public updatedAt?: Date;
  public isArchived?: boolean;
  public isPinned?: boolean;

  private constructor(props: SubNoteProps) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.code = props.code;
    this.noteId = props.noteId;
    this.tags = props.tags ?? [];
    this.images = props.images ?? [];
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.isArchived = props.isArchived;
    this.isPinned = props.isPinned;
  }

  static create(dto: {
    title: string;
    description?: string;
    code?: string;
    noteId: string;
    // tags: TagEntity[];
    // images: NoteImageEntity[];
  }): SubNoteEntity {
    return new SubNoteEntity({
      id: Uuid.v4(),
      title: dto.title,
      description: dto.description,
      code: dto.code,
      noteId: dto.noteId,
      //   tags: dto.tags,
      //   images: dto.images,
      // createdAt: new Date(),
      // updatedAt: new Date(),
    });
  }

  // static update(
  //   dto: Partial<Omit<SubNoteProps, "id" | "createdAt">>
  // ): Partial<SubNoteEntity> {
  //   if (dto.title && dto.title.length < 3) {
  //     throw CustomError.badRequest("The title must be at least 3 characters");
  //   }

  //   return {
  //     ...dto,
  //     updatedAt: new Date(),
  //   };
  // }

  static fromPrisma(prismaData: SubNoteProps): SubNoteEntity {
    return new SubNoteEntity(prismaData);
  }
}
