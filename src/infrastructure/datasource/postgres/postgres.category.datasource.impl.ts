import { CustomError } from "../../../domain/errors/custom.error";

import { pgPool } from "../../../data/postgresql/init";
import { CategoryDataSource } from "../../../domain/datasources/category.datasource";
import { CategoryEntity } from "../../../domain/entities/categories.entitie";
import { UserRepository } from "../../../domain/repository/user.repository";
import { UserEntity } from "../../../domain/entities/user.entitie";

export class PostgresCategoryDataSourceImpl implements CategoryDataSource {
  constructor(private readonly userRepository: UserRepository) {}

  async createCategory(category: CategoryEntity): Promise<CategoryEntity> {
    try {
      const { id, name, color, user } = category;

      await pgPool.query(
        `INSERT INTO categories (id,name,color,user_id) VALUES($1,$2,$3,$4) `,
        [id, name, color, user.id]
      );

      return CategoryEntity.fromObject({ ...category });
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }
  async getCategoriesById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]> {
    try {
      console.log(user);

      const offset = (page - 1) * limit;
      console.log(offset);
      const result = await pgPool.query(
        "SELECT * FROM get_categories_paginated($1, $2, $3)",
        [limit, offset, user.id]
      );

      const categories = result.rows;

      return categories;
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }
  async getCategoryById(id: string): Promise<CategoryEntity | null> {
    try {
      const result = await pgPool.query(
        "SELECT * FROM categories WHERE id = $1",
        [id]
      );

      const row = result.rows[0];
      if (!row)
        throw CustomError.notFound(`No category file found with id : ${id}`);

      const user = await this.userRepository.findUserById(row.user_id);
      if (!user) throw CustomError.notFound("User not found");

      return CategoryEntity.fromObject({
        ...row,
        user,
      });
    } catch (error: any) {
      throw error;
    }
  }
  async updateCategoryById(
    id: string,
    updates: Partial<CategoryEntity>
  ): Promise<void> {
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
      const query = `UPDATE categories SET ${fields.join(
        ", "
      )} WHERE id = $${i} `;
      await pgPool.query(query, values);
    } catch (error: any) {
      throw error;
      //  throw CustomError.badRequest(error.detail);
    }
  }
  async deleteCategoryById(id: string): Promise<void> {
    try {
      const query = `DELETE FROM categories  WHERE id = $1 `;
      await pgPool.query(query, [id]);
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }
}
