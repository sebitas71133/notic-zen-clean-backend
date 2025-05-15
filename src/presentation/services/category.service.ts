import { BycripAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { Uuid } from "../../config/uuid";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { CategoryRepository } from "../../domain/repository/category.repository";
import { CategoryEntity } from "../../domain/entities/categories.entitie";
import { CreateCategoryDto } from "../dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "../dtos/category/update-category.dto";

export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  createCategory = async (dto: CreateCategoryDto, user: UserEntity) => {
    try {
      //2. Crear Entidad

      const categoryEntity = CategoryEntity.create({
        name: dto.name,
        color: dto.color,
        user: user,
      });

      const category = await this.categoryRepository.createCategory(
        categoryEntity
      );

      return {
        category: category,
      };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving category");
    }
  };

  getCategoriesById = async (
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]> => {
    try {
      const categories = await this.categoryRepository.getCategoriesById(
        page,
        limit,
        user
      );
      console.log(categories);
      return categories ?? [];
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error fetching categories");
    }
  };

  getCategoryById = async (
    id: string,
    user: UserEntity
  ): Promise<Partial<CategoryEntity>> => {
    try {
      const category = await this.categoryRepository.getCategoryById(id);
      console.log(category);
      if (!category)
        throw CustomError.notFound(`Category not found by id: ${id}`);

      if (category.user.id !== user.id) {
        throw CustomError.forbidden(
          "No tienes permiso para ver esta categoría"
        );
      }

      return category ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching user");
    }
  };

  updateCategoryById = async (
    id: string,
    dto: Partial<UpdateCategoryDTO>,
    user: UserEntity
  ): Promise<CategoryEntity> => {
    try {
      const category = await this.categoryRepository.getCategoryById(id);

      if (!category) {
        throw CustomError.badRequest("Categoría no encontrada");
      }

      if (category.user.id !== user.id) {
        throw CustomError.forbidden(
          "No tienes permiso para modificar esta categoría"
        );
      }

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing category ID");
      }

      const validEntity = CategoryEntity.updated(dto);

      await this.categoryRepository.updateCategoryById(id, validEntity);

      const updatedCategory = await this.categoryRepository.getCategoryById(id);

      if (!updatedCategory)
        throw CustomError.notFound(`Category not found by id: ${id}`);

      return updatedCategory ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching categories");
    }
  };

  deleteCategoryById = async (id: string, user: UserEntity): Promise<void> => {
    try {
      const category = await this.categoryRepository.getCategoryById(id);

      if (!category) {
        throw CustomError.badRequest("Categoría no encontrada");
      }

      if (category.user.id !== user.id) {
        throw CustomError.forbidden(
          "No tienes permiso para modificar esta categoría"
        );
      }

      await this.categoryRepository.deleteCategoryById(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error deleting categorie");
    }
  };
}
