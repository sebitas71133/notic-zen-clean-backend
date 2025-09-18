import { Uuid } from "../../shared/adapters.ts/uuid";

import { CategoryEntity } from "./categories.entitie";
import { NoteImageEntity } from "./image.entitie";
import { TagEntity } from "./tagEntity";

interface NoteProps {
  id: string;
  title: string;
  content?: string;
  userId: string;
  categoryId: string | null;
  isArchived?: boolean;
  isPinned?: boolean;
  images?: NoteImageEntity[];
  tags?: TagEntity[];
  readonly createdAt?: Date;
  updatedAt?: Date;
  category?: CategoryEntity;
}

export class NoteEntity {
  public readonly id: string;
  public title: string;
  public content?: string;
  public userId: string;
  public categoryId: string | null;
  public images: NoteImageEntity[];
  public tags?: TagEntity[];
  public isArchived?: boolean;
  public isPinned?: boolean;
  public readonly createdAt?: Date;
  public updatedAt?: Date;
  public category?: CategoryEntity;

  private constructor(props: NoteProps) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content ?? "";
    this.category = props.category;
    this.categoryId = props.categoryId;
    this.images = props.images ?? [];
    this.tags = props.tags ?? [];
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.isArchived = props.isArchived;
    this.isPinned = props.isPinned;
    this.userId = props.userId;
  }

  static create(dto: {
    title: string;
    content?: string;
    categoryId: string;
    userId: string;
  }): NoteEntity {
    const id = Uuid.v4();

    return new NoteEntity({
      id: id,
      title: dto.title,
      content: dto.content,
      userId: dto.userId,
      categoryId: dto.categoryId,
    });
  }

  static fromObject(props: NoteProps): NoteEntity {
    const note = new NoteEntity(props);

    return note;
  }
}
