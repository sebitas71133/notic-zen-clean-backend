import { CustomError } from "../../../domain/errors/custom.error";

import { UserRepository } from "../../../domain/repository/user.repository";
import { UserEntity } from "../../../domain/entities/user.entitie";
import { TagDataSource } from "../../../domain/datasources/tag.datasource";
import { TagEntity } from "../../../domain/entities/tagEntity";
import { prismaClient } from "../../../data/prisma/init";

export class PostgresTagDataSourceImpl implements TagDataSource {
  constructor(private readonly userRepository: UserRepository) {}

  async createTag(tag: TagEntity): Promise<TagEntity> {
    try {
      const { id, name, userId } = tag;

      await prismaClient.tag.create({
        data: {
          id,
          name,
          user: {
            connect: { id: userId! },
          },
        },
      });
      return TagEntity.fromObject({ ...tag });
    } catch (error: any) {
      if (error.code === "P2002") {
        throw CustomError.notFound("Tag ya existe");
      }
      throw CustomError.badRequest(error || "Error al crear la categoria");
    }
  }
  async getTagsById(
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<TagEntity[]> {
    try {
      const skip = (page - 1) * limit;

      const tags = await prismaClient.tag.findMany({
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

      return tags.map((tag) =>
        TagEntity.fromObject({ ...tag, userId: tag.user_id })
      );
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail || "Error al obtener los tags");
    }
  }
  async getTagById(tagId: string): Promise<TagEntity | null> {
    try {
      const tag = await prismaClient.tag.findUnique({
        where: { id: tagId },
        include: {
          user: true,
        },
      });

      if (!tag)
        throw CustomError.notFound(`No tag file found with id : ${tagId}`);

      if (tag.user_id === null) {
        throw CustomError.forbidden("No puedes modificar un tag del sistema");
      }

      const user = await this.userRepository.findUserById(tag.user_id);
      if (!user) throw CustomError.notFound("Tag not found");

      return TagEntity.fromObject({ ...tag, userId: tag.user_id });
    } catch (error: any) {
      throw error;
    }
  }
  async updateTagById(
    tagId: string,
    updates: Partial<TagEntity>
  ): Promise<void> {
    try {
      await prismaClient.tag.update({
        where: { id: tagId },
        data: {
          name: updates.name,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound("Tag no encontrada para actualizar");
      }
      throw CustomError.badRequest(error.message || "Error al actualizar tag");
    }
  }
  async deleteTagById(catId: string): Promise<void> {
    try {
      await prismaClient.tag.delete({
        where: { id: catId },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound("Tag no encontrada para eliminar");
      }
      throw CustomError.badRequest(error.message || "Error al eliminar tag");
    }
  }
}
