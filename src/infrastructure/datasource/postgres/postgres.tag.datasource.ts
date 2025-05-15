import { CustomError } from "../../../domain/errors/custom.error";

import { pgPool } from "../../../data/postgresql/init";

import { UserRepository } from "../../../domain/repository/user.repository";
import { UserEntity } from "../../../domain/entities/user.entitie";
import { TagDataSource } from "../../../domain/datasources/tag.datasource";
import { TagEntity } from "../../../domain/entities/tagEntity";

export class PostgresTagDataSourceImpl implements TagDataSource {
  constructor(private readonly userRepository: UserRepository) {}

  async createTag(tag: TagEntity): Promise<TagEntity> {
    try {
      const { id, name, userId } = tag;

      await pgPool.query(
        `INSERT INTO tags (id,name,user_id) VALUES($1,$2,$3) `,
        [id, name, userId]
      );

      return TagEntity.fromObject({ ...tag });
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }
  async getTagsById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<TagEntity[]> {
    try {
      const offset = (page - 1) * limit;

      const result = await pgPool.query(
        "SELECT * FROM get_tags_paginated($1, $2, $3)",
        [limit, offset, user.id]
      );

      const tags = result.rows;

      return tags;
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }
  async getTagById(id: string): Promise<TagEntity | null> {
    try {
      const result = await pgPool.query("SELECT * FROM tags WHERE id = $1", [
        id,
      ]);

      const row = result.rows[0];
      if (!row) throw CustomError.notFound(`No tag file found with id : ${id}`);

      const user = await this.userRepository.findUserById(row.user_id);
      if (!user) throw CustomError.notFound("User not found");

      return TagEntity.fromObject({
        ...row,
        user,
      });
    } catch (error: any) {
      throw error;
    }
  }
  async updateTagById(id: string, updates: Partial<TagEntity>): Promise<void> {
    try {
      const fields: string[] = [];
      const values: any[] = [];
      let i = 1;

      for (const [key, value] of Object.entries(updates)) {
        if (value !== undefined) {
          fields.push(`${key} = $${i}`);
          values.push(value);
          i++;
        }
      }

      if (fields.length === 0)
        throw CustomError.notFound("No hay campos a actualizar"); // No hay campos a actualizar

      values.push(id);
      const query = `UPDATE tags SET ${fields.join(", ")} WHERE id = $${i} `;
      await pgPool.query(query, values);
    } catch (error: any) {
      throw error;
      //  throw CustomError.badRequest(error.detail);
    }
  }
  async deleteTagById(id: string): Promise<void> {
    try {
      const query = `DELETE FROM tags  WHERE id = $1 `;
      await pgPool.query(query, [id]);
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }
}
