import { CustomError } from "../../domain/errors/custom.error";

import { SubNoteRepository } from "../../domain/repository/subnote.repository";
import { SubNoteEntity } from "../../domain/entities/subnote.entitie";

import { SubNoteImageEntity } from "../../domain/entities/subImage.entitie";
import { CreateSubNoteDTO } from "../../presentation/dtos/subnote/create-subnote.dto";
import { CreateImageDto } from "../../presentation/dtos/image/create-image.dto";
import { SaveSubNoteDTO } from "../../presentation/dtos/subnote/save-subnote.dto";
import { ISubNoteService } from "../../domain/services/subnote.service";
import { IImageService } from "../../domain/services/image.service";

export class SubNoteService implements ISubNoteService {
  constructor(
    private readonly subNoteRepository: SubNoteRepository,
    private readonly imageService: IImageService
  ) {}

  createSubNote = async (
    userId: string,
    dto: CreateSubNoteDTO
  ): Promise<SubNoteEntity | null> => {
    try {
      //2. Crear Entidad

      const subNoteEntity = SubNoteEntity.create(dto);

      const tagIds = dto.tags ?? [];
      const subImages = (dto.images as CreateImageDto[]) ?? [];

      const newSubNote = await this.subNoteRepository.createSubNote(
        subNoteEntity
      );

      const subNoteId = newSubNote.id;

      // 3. Tags
      await this.subNoteRepository.clearTags(subNoteId);
      if (tagIds.length) {
        await this.subNoteRepository.addTagsToSubNote(subNoteId, tagIds);
      }

      const processedImages = await this.imageService.processImages(
        subImages,
        "subnote"
      );

      // 4. Imágenes
      await this.subNoteRepository.clearImages(subNoteId);
      if (subImages.length) {
        const subImagesEntity = processedImages.map((img) =>
          SubNoteImageEntity.create({
            subNoteId: subNoteId,
            url: img.url,
            altText: img.altText,
            publicId: img.publicId,
          })
        );

        await this.subNoteRepository.addImagesToSubNote(
          subNoteId,
          subImagesEntity
        );
      }

      // 5. Nota actualizada

      return await this.subNoteRepository.getSubNoteById(subNoteId, userId);
    } catch (error) {
      console.log({ service: error });
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving Subnote");
    }
  };

  saveSubNote = async (
    subNoteId: string,
    dto: SaveSubNoteDTO,
    noteId: string,
    userId: string
  ): Promise<SubNoteEntity | null> => {
    try {
      // console.log({ subNoteId, dto, noteId, userId });

      const canEdit = await this.subNoteRepository.canUserEditSubNote(
        noteId,
        userId
      );

      if (!canEdit)
        throw CustomError.forbidden("No tienes permiso sobre la nota");

      await this.subNoteRepository.saveSubNoteById(subNoteId, dto);

      // 2. Normalizar colecciones
      const tagIds = dto.tags ?? [];
      const imagesD = dto.images as CreateImageDto[];

      // 3. Tags
      await this.subNoteRepository.clearTags(subNoteId);
      if (tagIds.length) {
        await this.subNoteRepository.addTagsToSubNote(subNoteId, tagIds);
      }

      const processedImages = await this.imageService.processImages(
        imagesD,
        "subnote"
      );

      // 4. Imágenes
      await this.subNoteRepository.clearImages(subNoteId);
      if (imagesD.length) {
        const subImagesEntity = processedImages.map((img) =>
          SubNoteImageEntity.create({
            subNoteId: subNoteId,
            url: img.url,
            altText: img.altText,
            publicId: img.publicId,
          })
        );

        await this.subNoteRepository.addImagesToSubNote(
          subNoteId,
          subImagesEntity
        );
      }

      // 5. Nota actualizada
      return await this.subNoteRepository.getSubNoteById(subNoteId, userId);
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error saving subNote");
    }
  };

  getSubNotesByNoteId = async (
    page: number,
    limit: number,
    noteId: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<SubNoteEntity[]> => {
    try {
      const notes = await this.subNoteRepository.getSubNotesByNoteId(
        page,
        limit,
        noteId,
        tagId,
        isArchived,
        isPinned,
        sortDate,
        sortTitle
      );

      return notes ?? [];
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error fetching notes");
    }
  };

  getAllSubNotesByUserId = async (userId: string): Promise<SubNoteEntity[]> => {
    try {
      const notes = await this.subNoteRepository.getAllSubNotesByUserId(userId);

      return notes ?? [];
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error fetching notes");
    }
  };

  getSubNoteById = async (
    subNoteId: string,
    userId: string
  ): Promise<SubNoteEntity> => {
    try {
      const subNote = await this.subNoteRepository.getSubNoteById(
        subNoteId,
        userId
      );

      if (!subNote)
        throw CustomError.unauthorized(
          `No tienes permisos para acceder a esta subnota`
        );

      return subNote;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching subNote");
    }
  };

  deleteSubNoteById = async (
    subNoteId: string,
    userId: string
  ): Promise<void> => {
    try {
      const subNote = await this.subNoteRepository.isValidUserToEditSubNote(
        subNoteId,
        userId
      );

      if (!subNote) {
        throw CustomError.badRequest(
          "SubNote no encontrada o no tienes permisos"
        );
      }

      await this.subNoteRepository.deleteSubNoteById(subNoteId);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error deleting subNote");
    }
  };
}
