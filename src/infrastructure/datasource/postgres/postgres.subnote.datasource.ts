import { CustomError } from "../../../domain/errors/custom.error";

import { TagEntity } from "../../../domain/entities/tagEntity";

import { SubNoteDataSource } from "../../../domain/datasources/subnote.datasource";
import { SubNoteEntity } from "../../../domain/entities/subnote.entitie";
import { SubNoteImageEntity } from "../../../domain/entities/subImage.entitie";
import { Prisma } from "@prisma/client";
import { prismaClient } from "../../../data/prisma/init";
import { SaveSubNoteDTO } from "../../../presentation/dtos/subnote/save-subnote.dto";

export class PostgresSubNoteDataSourceImpl implements SubNoteDataSource {
  constructor() {}

  async createSubNote(subnote: SubNoteEntity): Promise<SubNoteEntity> {
    try {
      await prismaClient.subNote.create({
        data: {
          id: subnote.id, // Puedes dejar que Prisma genere UUID si es undefined
          title: subnote.title,
          description: subnote.description,
          is_pinned: subnote.isPinned,
          is_archived: subnote.isArchived,
          code: subnote.code,
          created_at: subnote.createdAt,
          updated_at: subnote.updatedAt,
          note: {
            connect: { id: subnote.noteId },
          },
        } as Prisma.SubNoteCreateInput,
      });

      return SubNoteEntity.fromPrisma({ ...subnote });
    } catch (error: any) {
      if (error.code === "P2002") {
        throw CustomError.notFound("No se puede crear una subnota repetida");
      }
      throw CustomError.badRequest(
        error.message || "Error al eliminar SubNota"
      );
    }
  }

  async saveSubNoteById(
    subNoteId: string,
    // userId: string,
    updates: SaveSubNoteDTO
  ): Promise<SubNoteEntity> {
    try {
      const updated = await prismaClient.subNote.update({
        where: {
          id: subNoteId,
          // note: {
          //   user_id: userId,
          // },
        },
        data: {
          title: updates.title,
          description: updates.description,
          code: updates.code,
          is_pinned: this.toBoolean(updates.isPinned),
          is_archived: this.toBoolean(updates.isArchived),
        },
      });

      console.log(updated);

      // Retornar la entidad
      return SubNoteEntity.fromPrisma({
        id: updated.id,
        title: updated.title,
        description: updated.description,
        code: updated.code,
        noteId: updated.note_id,
        createdAt: updated.created_at,
        updatedAt: updated.updated_at,
        tags: [], // Puedes poblar esto si lo necesitas
        images: [], // Igual aquí
      });
    } catch (error: any) {
      console.error(error);
      throw CustomError.internalServer(
        error.message || "Error al guardar la subnota"
      );
    }
  }

  async getSubNotesByNoteId(
    page: number,
    limit: number,
    noteId: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<SubNoteEntity[]> {
    try {
      const skip = (page - 1) * limit;
      const archivedBool = this.toBoolean(isArchived);
      const pinnedBool = this.toBoolean(isPinned);

      const orderBy: any[] = [];

      if (sortDate) {
        orderBy.push({ created_at: sortDate }); // "asc" o "desc"
      }

      if (sortTitle) {
        orderBy.push({ title: sortTitle });
      }

      const prismaSubNotes = await prismaClient.subNote.findMany({
        where: {
          note_id: noteId,
          ...(tagId && {
            tags: {
              some: {
                tag_id: tagId,
              },
            },
          }),
          ...(isArchived && { is_archived: archivedBool }),
          ...(isPinned && { is_pinned: pinnedBool }),
        },
        skip,
        take: limit,
        orderBy: orderBy.length > 0 ? orderBy : [{ created_at: "asc" }],
        include: {
          tags: {
            include: {
              tag: {
                select: { id: true, name: true },
              },
            },
          },
          images: {
            select: {
              id: true,
              url: true,
              alt_text: true,
              created_at: true,
              public_id: true,
            },
          },
        },
      });

      return prismaSubNotes.map((sub) =>
        SubNoteEntity.fromPrisma({
          id: sub.id,
          title: sub.title,
          description: sub.description ?? "",
          code: sub.code,
          noteId: sub.note_id,
          isArchived: sub.is_archived,
          isPinned: sub.is_pinned,
          createdAt: sub.created_at,
          updatedAt: sub.updated_at,
          tags: sub.tags.map(
            (t) => ({ id: t.tag.id, name: t.tag.name } as TagEntity)
          ),
          images: sub.images.map(
            (img) =>
              ({
                id: img.id,
                url: img.url,
                altText: img.alt_text ?? undefined,
                createdAt: img.created_at,
                publicId: img.public_id,
              } as SubNoteImageEntity)
          ),
        })
      );
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.message);
    }
  }

  async getSubNoteById(
    subNoteId: string,
    userId: string
  ): Promise<SubNoteEntity | any> {
    const note = await prismaClient.subNote.findFirst({
      where: {
        id: subNoteId,
        OR: [
          { note: { user_id: userId } }, // dueño
          { note: { NoteShare: { some: { userId } } } }, // compartido
        ],
      },
      include: {
        tags: {
          include: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        images: {
          select: {
            id: true,
            url: true,
            alt_text: true,
            created_at: true,
            sub_note_id: true,
            public_id: true,
          },
        },
      },
    });

    if (!note) {
      return null;
    }

    // Adaptar los tags a arreglo simple
    const tags = note.tags.map((nt) => ({
      id: nt.tag_id,
      name: nt.tag.name,
      userId: userId,
    }));

    const images = note.images.map((img) => ({
      id: img.id,
      subNoteId: img.sub_note_id,
      url: img.url,
      createdAt: img.created_at,
      altText: img.alt_text ?? "",
      publicId: img.public_id ?? "",
    }));

    return SubNoteEntity.fromPrisma({
      id: note.id,
      title: note.title,
      description: note.description!,
      code: note.code,
      noteId: note.note_id,
      tags: tags,
      images: images,
      createdAt: note?.created_at,
      updatedAt: note?.updated_at,
    });
  }

  async deleteSubNoteById(subNoteId: string): Promise<void> {
    try {
      await prismaClient.subNote.delete({
        where: { id: subNoteId },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound("SubNota no encontrada para eliminar");
      }
      throw CustomError.badRequest(
        error.message || "Error al eliminar SubNota"
      );
    }
  }

  async clearTags(subNoteId: string): Promise<void> {
    await prismaClient.subNoteTag.deleteMany({
      where: {
        sub_note_id: subNoteId,
      },
    });
  }

  async addTagsToSubNote(subNoteId: string, tagIds: string[]): Promise<void> {
    const data = tagIds.map((tagId) => ({
      sub_note_id: subNoteId,
      tag_id: tagId,
    }));

    await prismaClient.subNoteTag.createMany({
      data,
      skipDuplicates: true, // evita errores por relaciones ya existentes
    });
  }

  async clearImages(subNoteId: string): Promise<void> {
    await prismaClient.subNoteImage.deleteMany({
      where: {
        sub_note_id: subNoteId,
      },
    });
  }

  async addImagesToSubNote(
    subNoteId: string,
    images: SubNoteImageEntity[]
  ): Promise<void> {
    const data = images.map((img) => ({
      id: img.id,
      url: img.url,
      alt_text: img.altText ?? "",
      sub_note_id: subNoteId,
      public_id: img.publicId ?? "",
    }));
    await prismaClient.subNoteImage.createMany({
      data,
    });
  }

  async getAllSubNotesByUserId(userId: string): Promise<SubNoteEntity[]> {
    try {
      const prismaSubNotes = await prismaClient.subNote.findMany({
        where: {
          note: {
            user_id: userId,
          },
        },
        include: {
          tags: {
            include: {
              tag: {
                select: { id: true, name: true },
              },
            },
          },
          images: {
            select: {
              id: true,
              url: true,
              alt_text: true,
              created_at: true,
              public_id: true,
            },
          },
        },
      });

      return prismaSubNotes.map((sub) =>
        SubNoteEntity.fromPrisma({
          id: sub.id,
          title: sub.title,
          description: sub.description ?? "",
          noteId: sub.note_id,
          createdAt: sub.created_at,
          updatedAt: sub.updated_at,
          tags: sub.tags.map(
            (t) => ({ id: t.tag.id, name: t.tag.name } as TagEntity)
          ),
          images: sub.images.map(
            (img) =>
              ({
                id: img.id,
                url: img.url,
                altText: img.alt_text ?? undefined,
                createdAt: img.created_at,
                publicId: img.public_id,
              } as SubNoteImageEntity)
          ),
        })
      );
    } catch (error: any) {
      console.error(error);
      throw CustomError.badRequest(error.message);
    }
  }

  async canUserEditSubNote(noteId: string, userId: string): Promise<boolean> {
    try {
      const note = await prismaClient.note.findFirst({
        where: {
          id: noteId,
          OR: [
            { user_id: userId },
            { NoteShare: { some: { userId, role: "EDITOR" } } },
          ],
        },
        select: { id: true }, // solo necesitas saber si existe
      });

      return !!note;
    } catch (error: any) {
      throw CustomError.badRequest(
        error.message || "Error al validar permisos"
      );
    }
  }

  toBoolean(value?: string | boolean): boolean | undefined {
    if (value === "true") return true;
    if (value === "false") return false;

    return undefined;
  }

  async isValidUserToEditSubNote(
    subNoteId: string,
    userId: string
  ): Promise<boolean> {
    const existing = await prismaClient.subNote.findFirst({
      where: {
        id: subNoteId,
        note: {
          user_id: userId,
        },
      },
    });

    return !!existing;
  }
}
