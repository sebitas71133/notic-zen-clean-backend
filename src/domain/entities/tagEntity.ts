import { Uuid } from "../../config/uuid";
import { CustomError } from "../errors/custom.error";

export interface TagProps {
  name: string;
  userId: string;
}

export class TagEntity {
  constructor(
    public readonly id: string,
    public name: string,
    public userId: string | null
  ) {}

  static create(props: TagProps): TagEntity {
    const id = Uuid.v4();
    return new TagEntity(id, props.name, props.userId);
  }

  static updated(dto: Partial<TagEntity>): Partial<TagEntity> {
    if (dto.name && dto.name.length <= 2) {
      throw CustomError.badRequest("The tag must be more than 2 characters");
    }

    return dto;
  }

  static fromObject(props: {
    id: string;
    name: string;
    userId: string | null;
  }): TagEntity {
    const tag = new TagEntity(props.id, props.name, props.userId);

    return tag;
  }
}
