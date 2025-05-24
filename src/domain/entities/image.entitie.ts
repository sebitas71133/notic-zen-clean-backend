import { Uuid } from "../../config/uuid";

export interface NoteImageProps {
  noteId: string;
  url: string;
  altText?: string;
  publicId?: string;
}

export class NoteImageEntity {
  constructor(
    public readonly id: string,
    public readonly noteId: string,
    public url: string,
    public readonly createdAt: Date,
    public altText: string,
    public publicId?: string
  ) {}

  static create(props: NoteImageProps): NoteImageEntity {
    const id = Uuid.v4();
    return new NoteImageEntity(
      id,
      props.noteId,
      props.url,
      new Date(),
      props.altText ?? "Una descripcion...",
      props.publicId
    );
  }

  static fromObject(props: {
    id: string;
    noteId: string;
    url: string;
    createdAt: Date;
    altText?: string;
    publicId?: string;
  }): NoteImageEntity {
    const category = new NoteImageEntity(
      props.id,
      props.noteId,
      props.url,
      props.createdAt,
      props.altText ?? "image...",
      props.publicId
    );

    return category;
  }
}
