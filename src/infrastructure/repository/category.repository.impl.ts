import { CategoryDataSource } from "../../domain/datasources/category.datasource";

import { CategoryEntity } from "../../domain/entities/categories.entitie";
import { UserEntity } from "../../domain/entities/user.entitie";

import { CategoryRepository } from "../../domain/repository/category.repository";

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(private readonly categoryDataSource: CategoryDataSource) {}
  createCategory(category: CategoryEntity): Promise<CategoryEntity> {
    return this.categoryDataSource.createCategory(category);
  }
  getCategoriesById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]> {
    return this.categoryDataSource.getCategoriesById(page, limit, user);
  }
  getCategoryById(id: string): Promise<CategoryEntity | null> {
    return this.categoryDataSource.getCategoryById(id);
  }
  updateCategoryById(
    id: string,
    updates: Partial<CategoryEntity>
  ): Promise<void> {
    return this.categoryDataSource.updateCategoryById(id, updates);
  }
  deleteCategoryById(id: string): Promise<void> {
    return this.categoryDataSource.deleteCategoryById(id);
  }
}
