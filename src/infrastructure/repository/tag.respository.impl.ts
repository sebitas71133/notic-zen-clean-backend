import { TagDataSource } from "../../domain/datasources/tag.datasource";
import { TagEntity } from "../../domain/entities/tagEntity";
import { UserEntity } from "../../domain/entities/user.entitie";

import { TagRepository } from "../../domain/repository/tag.repository";

export class TagRepositoryImpl implements TagRepository {
  constructor(private readonly tagDataSource: TagDataSource) {}
  createTag(tag: TagEntity): Promise<TagEntity> {
    return this.tagDataSource.createTag(tag);
  }
  getTagsById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<TagEntity[]> {
    return this.tagDataSource.getTagsById(page, limit, user);
  }
  getTagById(id: string): Promise<TagEntity | null> {
    return this.tagDataSource.getTagById(id);
  }
  updateTagById(id: string, updates: Partial<TagEntity>): Promise<void> {
    return this.tagDataSource.updateTagById(id, updates);
  }
  deleteTagById(id: string): Promise<void> {
    return this.tagDataSource.deleteTagById(id);
  }
}
