import { CreateTagDto } from "../../presentation/dtos/tags/create-tag.dto";

import { TagEntity } from "../entities/tagEntity";
import { UserEntity } from "../entities/user.entitie";

export interface ITagService {
  createTag(
    dto: CreateTagDto,
    userId: string
  ): Promise<{
    tag: TagEntity;
  }>;

  getTags(page: number, limit: number, user: UserEntity): Promise<TagEntity[]>;
  getTagById(id: string, user: UserEntity): Promise<Partial<TagEntity>>;

  updateTagById(
    id: string,
    dto: Partial<TagEntity>,
    user: UserEntity
  ): Promise<TagEntity>;

  deleteTagById(id: string, user: UserEntity): Promise<void>;
}
