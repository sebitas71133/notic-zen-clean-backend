import { Uuid } from "../../shared/adapters.ts/uuid";
import { CustomError } from "../errors/custom.error";
import { CategoryEntity } from "./categories.entitie";
import { NoteImageEntity } from "./image.entitie";
import { TagEntity } from "./tagEntity";

export class NoteEntity {
  private constructor(
    public readonly id: string,
    public title: string,
    public content: string,
    public userId: string,
    public categoryId: string | null,
    public isArchived: boolean,
    public isPinned: boolean,
    public images: NoteImageEntity[] = [],
    public tags: TagEntity[] = [],
    public readonly createdAt: Date,
    public updatedAt: Date,
    public category?: CategoryEntity
  ) {}

  static create(dto: { [key: string]: any }): NoteEntity {
    const id = Uuid.v4();
    if (dto.title && dto.title.length <= 2) {
      throw CustomError.badRequest("The title must be more than 2 characters");
    }

    return new NoteEntity(
      id,
      dto.title,
      dto.content,
      dto.userId,
      dto.categoryId,
      dto.isArchived,
      dto.isPinned,
      undefined,
      undefined,
      new Date(),
      new Date()
    );
  }

  static updated(dto: { [key: string]: any }): Partial<NoteEntity> {
    if (dto.title && dto.title.length <= 2) {
      throw CustomError.badRequest("The title must be more than 2 characters");
    }

    return { ...dto, updatedAt: new Date() };
  }

  static fromObject(props: {
    id: string;
    title: string;
    content: string;
    userId: string;
    categoryId: string | null;
    isArchived: boolean;
    isPinned: boolean;
    createdAt: Date;
    updatedAt: Date;
    images: NoteImageEntity[];
    tags: TagEntity[];
    category?: CategoryEntity;
  }): NoteEntity {
    const category = new NoteEntity(
      props.id,
      props.title,
      props.content,
      props.userId,
      props.categoryId,
      props.isArchived,
      props.isPinned,
      props.images ?? [],
      props.tags ?? [],
      props.createdAt,
      props.updatedAt,
      props.category
    );

    return category;
  }
}
