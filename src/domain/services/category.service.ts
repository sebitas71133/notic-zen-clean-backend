import { CreateCategoryDto } from "../../presentation/dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "../../presentation/dtos/category/update-category.dto";
import { CategoryEntity } from "../entities/categories.entitie";
import { UserEntity } from "../entities/user.entitie";

export interface ICategoryService {
  createCategory(
    dto: CreateCategoryDto,
    user: UserEntity
  ): Promise<{
    category: CategoryEntity;
  }>;

  getCategoriesById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]>;
  getCategoriesById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]>;

  getCategoryById(
    id: string,
    user: UserEntity
  ): Promise<Partial<CategoryEntity>>;

  updateCategoryById(
    id: string,
    dto: Partial<UpdateCategoryDTO>,
    user: UserEntity
  ): Promise<CategoryEntity>;

  deleteCategoryById(id: string, user: UserEntity): Promise<void>;
}
