import { BycripAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { Uuid } from "../../config/uuid";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { NoteEntity } from "../../domain/entities/note.entitie";
import { NoteRepository } from "../../domain/repository/note.repository";
import { SaveNoteDTO } from "../dtos/note/save-note.dto";
import { NoteImageEntity } from "../../domain/entities/image.entitie";
import { TagEntity } from "../../domain/entities/tagEntity";
import { TagService } from "./tags.service";
import { CreateTagDto } from "../dtos/tags/create-tag.dto";
import { CreateImageDto } from "../dtos/image/create-image.dto";
import { CreateNoteDTO } from "../dtos/note/create-note.dto";
import { ImageService } from "./Image.service";
import { SubNoteRepository } from "../../domain/repository/subnote.repository";
import { SubNoteEntity } from "../../domain/entities/subnote.entitie";
import { CreateSubNoteDTO } from "../dtos/subnote/create-subnote.dto";
import { SubNoteImageEntity } from "../../domain/entities/subImage.entitie";
import { SaveSubNoteDTO } from "../dtos/subnote/save-subnote.dto";

export class SubNoteService {
  constructor(
    private readonly tagService: TagService,
    private readonly subNoteRepository: SubNoteRepository,
    private readonly imageService: ImageService
  ) {}

  createSubNote = async (userId: string, dto: CreateSubNoteDTO) => {
    try {
      //2. Crear Entidad

      const subNoteEntity = SubNoteEntity.create(dto);

      const tagIds = dto.tags ?? [];
      const imagesD = (dto.images as CreateImageDto[]) ?? [];

      console.log({ subNoteEntity, tagIds, imagesD });

      const newSubNote = await this.subNoteRepository.createSubNote(
        subNoteEntity
      );

      const subNoteId = newSubNote.id;

      console.log({ subNoteId });

      // 3. Tags
      await this.subNoteRepository.clearTags(subNoteId);
      if (tagIds.length) {
        await this.subNoteRepository.addTagsToSubNote(subNoteId, tagIds);
      }

      const processedImages = await this.imageService.processImages(imagesD);

      console.log({ processedImages });

      // // 4. Imágenes
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
        console.log({ subImagesEntity });
        await this.subNoteRepository.addImagesToSubNote(
          subNoteId,
          subImagesEntity
        );
      }

      // 5. Nota actualizada

      return await this.subNoteRepository.getSubNoteById(subNoteId, userId);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving Subnote");
    }
  };

  saveSubNote = async (
    subNoteId: string,
    dto: SaveSubNoteDTO,

    userId: string
  ): Promise<SubNoteEntity | null> => {
    try {
      const note = await this.subNoteRepository.isValidUserToEditSubNote(
        subNoteId,
        userId
      );

      if (!note)
        throw CustomError.forbidden("No tienes permiso sobre la subnota");

      // 1. Actualizar nota principal
      const subNoteEntity = SubNoteEntity.update({
        description: dto.description,
        title: dto.title,
      });

      console.log(subNoteEntity);

      await this.subNoteRepository.saveSubNoteById(
        subNoteId,
        userId,
        subNoteEntity
      );

      // 2. Normalizar colecciones
      const tagIds = dto.tags ?? [];
      const imagesD = dto.images as CreateImageDto[];

      // 3. Tags
      await this.subNoteRepository.clearTags(subNoteId);
      if (tagIds.length) {
        await this.subNoteRepository.addTagsToSubNote(subNoteId, tagIds);
      }

      const processedImages = await this.imageService.processImages(imagesD);

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
        console.log({ subImagesEntity });
        await this.subNoteRepository.addImagesToSubNote(
          subNoteId,
          subImagesEntity
        );
      }

      // 5. Nota actualizada
      return await this.subNoteRepository.getSubNoteById(subNoteId, userId);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving note");
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

      // const i = notes.images;

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
      throw CustomError.internalServer("Error fetching note");
    }
  };

  // deleteNoteById = async (id: string, user: UserEntity): Promise<void> => {
  //   try {
  //     const tag = await this.noteRepository.getNoteById(id, user.id);

  //     if (!tag) {
  //       throw CustomError.badRequest("Note no encontrada o no tienes permisos");
  //     }

  //     // if (tag.userId !== user.id) {
  //     //   throw CustomError.forbidden(
  //     //     "No tienes permiso para modificar esta tag"
  //     //   );
  //     // }

  //     await this.noteRepository.deleteNoteById(id);
  //   } catch (error) {
  //     if (error instanceof CustomError) throw error;
  //     throw CustomError.internalServer("Error deleting note");
  //   }
  // };
}
