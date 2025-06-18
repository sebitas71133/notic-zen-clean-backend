import { Uuid } from "../../config/uuid";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { TagRepository } from "../../domain/repository/tag.repository";
import { TagEntity } from "../../domain/entities/tagEntity";
import { CreateTagDto } from "../../presentation/dtos/tags/create-tag.dto";

export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  createTag = async (dto: CreateTagDto, userId: string) => {
    try {
      //2. Crear Entidad

      const tagEntity = TagEntity.create({
        name: dto.name,
        userId: userId,
      });

      const tag = await this.tagRepository.createTag(tagEntity);

      return {
        tag: tag,
      };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving tag");
    }
  };

  getTags = async (
    page: number,
    limit: number,
    user: UserEntity
  ): Promise<TagEntity[]> => {
    try {
      const tags = await this.tagRepository.getTagsById(page, limit, user);

      return tags ?? [];
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error fetching tags");
    }
  };

  getTagById = async (
    id: string,
    user: UserEntity
  ): Promise<Partial<TagEntity>> => {
    try {
      const tag = await this.tagRepository.getTagById(id);

      if (!tag) throw CustomError.notFound(`tag not found by id: ${id}`);

      if (tag.userId !== user.id) {
        throw CustomError.forbidden("No tienes permiso para ver esta tag");
      }

      return tag ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching tag");
    }
  };

  updateTagById = async (
    id: string,
    dto: Partial<TagEntity>,
    user: UserEntity
  ): Promise<TagEntity> => {
    try {
      const tag = await this.tagRepository.getTagById(id);

      if (!tag) {
        throw CustomError.badRequest("tag no encontrada");
      }

      if (tag.userId !== user.id) {
        throw CustomError.forbidden(
          "No tienes permiso para modificar este tag"
        );
      }

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing tag ID");
      }

      const validDto = TagEntity.updated(dto);

      await this.tagRepository.updateTagById(id, validDto);

      const updatedTag = await this.tagRepository.getTagById(id);

      if (!updatedTag) throw CustomError.notFound(`tag not found by id: ${id}`);

      return updatedTag ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching tag");
    }
  };

  deleteTagById = async (id: string, user: UserEntity): Promise<void> => {
    try {
      const tag = await this.tagRepository.getTagById(id);

      if (!tag) {
        throw CustomError.badRequest("tag no encontrada");
      }

      if (tag.userId !== user.id) {
        throw CustomError.forbidden(
          "No tienes permiso para modificar esta tag"
        );
      }

      await this.tagRepository.deleteTagById(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error deleting tag");
    }
  };
}
