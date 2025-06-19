import { Uuid } from "../../shared/adapters.ts/uuid";

interface SubNoteImageProps {
  id: string;
  subNoteId: string;
  url: string;
  createdAt: Date;
  altText?: string;
  publicId?: string;
}

export class SubNoteImageEntity {
  public readonly id: string;
  public readonly subNoteId: string;
  public url: string;
  public readonly createdAt: Date;
  public altText: string;
  public publicId: string;

  constructor(props: SubNoteImageProps) {
    this.id = props.id;
    this.subNoteId = props.subNoteId;
    this.url = props.url;
    this.createdAt = props.createdAt;
    this.altText = props.altText ?? "";
    this.publicId = props.publicId ?? "";
  }

  static create(dto: {
    subNoteId: string;
    url: string;
    altText?: string;
    publicId?: string;
  }): SubNoteImageEntity {
    return new SubNoteImageEntity({
      id: Uuid.v4(),
      subNoteId: dto.subNoteId,
      url: dto.url,
      createdAt: new Date(),
      altText: dto.altText,
      publicId: dto.publicId,
    });
  }

  static fromPrisma(prismaData: SubNoteImageProps): SubNoteImageEntity {
    return new SubNoteImageEntity(prismaData);
  }
}
