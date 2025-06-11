// src/domain/entities/subnote.entity.ts
import { Uuid } from "../../config/uuid";
import { CustomError } from "../errors/custom.error";

import { SubNoteImageEntity } from "./subImage.entitie";
import { TagEntity } from "./tagEntity";

interface SubNoteProps {
  id: string;
  title: string;
  description?: string;
  noteId: string;
  tags?: TagEntity[];
  images?: SubNoteImageEntity[];
  createdAt: Date;
  updatedAt: Date;
}

export class SubNoteEntity {
  public readonly id: string;
  public title: string;
  public description?: string;
  public noteId: string;
  public tags: TagEntity[];
  public images: SubNoteImageEntity[];
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(props: SubNoteProps) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description ?? "";
    this.noteId = props.noteId;
    this.tags = props.tags ?? [];
    this.images = props.images ?? [];
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(dto: {
    title: string;
    description?: string;
    noteId: string;
    // tags: TagEntity[];
    // images: NoteImageEntity[];
  }): SubNoteEntity {
    return new SubNoteEntity({
      id: Uuid.v4(),
      title: dto.title,
      description: dto.description,
      noteId: dto.noteId,
      //   tags: dto.tags,
      //   images: dto.images,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static update(
    dto: Partial<Omit<SubNoteProps, "id" | "createdAt">>
  ): Partial<SubNoteEntity> {
    if (dto.title && dto.title.length < 3) {
      throw CustomError.badRequest("The title must be at least 3 characters");
    }

    return {
      ...dto,
      updatedAt: new Date(),
    };
  }

  static fromPrisma(prismaData: SubNoteProps): SubNoteEntity {
    return new SubNoteEntity(prismaData);
  }
}
