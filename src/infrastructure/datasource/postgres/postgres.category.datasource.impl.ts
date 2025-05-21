import { CustomError } from "../../../domain/errors/custom.error";

import { pgPool } from "../../../data/postgresql/init";
import { CategoryDataSource } from "../../../domain/datasources/category.datasource";
import { CategoryEntity } from "../../../domain/entities/categories.entitie";
import { UserRepository } from "../../../domain/repository/user.repository";
import { UserEntity } from "../../../domain/entities/user.entitie";
import { prismaClient } from "../../../data/prisma/init";
//prismaClient
export class PostgresCategoryDataSourceImpl implements CategoryDataSource {
  constructor(private readonly userRepository: UserRepository) {}

  async createCategory(category: CategoryEntity): Promise<CategoryEntity> {
    try {
      const { id, name, color, user } = category;

      await prismaClient.category.create({
        data: {
          id,
          name,
          color,
          ...(user && {
            user: {
              connect: { id: user.id },
            },
          }),
        },
      });

      return CategoryEntity.fromObject({ ...category });
    } catch (error: any) {
      if (error.code === "P2002") {
        throw CustomError.notFound("Categoria ya existe");
      }
      throw CustomError.badRequest(error || "Error al crear la categoria");
    }
  }
  async getCategoriesById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<CategoryEntity[]> {
    try {
      const skip = (page - 1) * limit;

      const categories = await prismaClient.category.findMany({
        where: {
          OR: [
            { user_id: user.id }, // tags personalizados
            { user_id: null }, // tags globales
          ],
        },
        skip,
        take: limit,
        orderBy: {
          name: "asc",
        },
      });

      return categories.map((cat) =>
        CategoryEntity.fromObject({ ...cat, user })
      );
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }
  async getCategoryById(catId: string): Promise<CategoryEntity | null> {
    try {
      const category = await prismaClient.category.findUnique({
        where: { id: catId },
        include: {
          user: true,
        },
      });

      if (!category)
        throw CustomError.notFound(`Categoría con id ${catId} no encontrada`);

      if (!category.user_id)
        throw CustomError.notFound(
          `Categoría con user Id : ${catId} no encontrada`
        );

      const user = await this.userRepository.findUserById(category.user_id);
      if (!user) throw CustomError.notFound("User not found");

      return CategoryEntity.fromObject({
        ...category,
        user,
      });
    } catch (error: any) {
      throw error;
    }
  }
  async updateCategoryById(
    catId: string,
    updates: Partial<CategoryEntity>
  ): Promise<void> {
    try {
      await prismaClient.category.update({
        where: { id: catId },
        data: {
          name: updates.name,
          color: updates.color,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound("Categoría no encontrada para actualizar");
      }
      throw CustomError.badRequest(
        error.message || "Error al actualizar categoría"
      );
    }
  }
  async deleteCategoryById(catId: string): Promise<void> {
    try {
      await prismaClient.category.delete({
        where: { id: catId },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound("Categoría no encontrada para eliminar");
      }
      throw CustomError.badRequest(
        error.message || "Error al eliminar categoría"
      );
    }
  }
}
