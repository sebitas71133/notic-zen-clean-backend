import { CategoryEntity } from "../entities/categories.entitie";
import { UserEntity } from "../entities/user.entitie";

export abstract class CategoryDataSource {
  abstract createCategory(category: CategoryEntity): Promise<CategoryEntity>;

  abstract getCategoriesById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]>;

  abstract getCategoryById(id: string): Promise<CategoryEntity | null>;

  abstract updateCategoryById(
    id: string,
    updates: Partial<CategoryEntity>
  ): Promise<void>;

  abstract deleteCategoryById(id: string): Promise<void>;
}
