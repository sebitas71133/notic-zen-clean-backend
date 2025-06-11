import { TagEntity } from "../entities/tagEntity";
import { UserEntity } from "../entities/user.entitie";

export abstract class TagRepository {
  abstract createTag(tag: TagEntity): Promise<TagEntity>;

  abstract getTagsById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<TagEntity[]>;

  abstract getTagById(id: string): Promise<TagEntity | null>;

  abstract updateTagById(
    id: string,
    updates: Partial<TagEntity>
  ): Promise<void>;

  abstract deleteTagById(id: string): Promise<void>;
}
