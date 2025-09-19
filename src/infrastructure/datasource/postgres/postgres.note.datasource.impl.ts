import { CustomError } from "../../../domain/errors/custom.error";

import { NoteEntity } from "../../../domain/entities/note.entitie";
import { NoteDataSource } from "../../../domain/datasources/note.datasource";

import { NoteImageEntity } from "../../../domain/entities/image.entitie";
import { TagEntity } from "../../../domain/entities/tagEntity";

// import { Prisma, PrismaClient } from "../../../generated/prisma";
import { CategoryEntity } from "../../../domain/entities/categories.entitie";
import { prismaClient } from "../../../data/prisma/init";
import { Prisma } from "@prisma/client";
import { UpdateNoteDTO } from "../../../presentation/dtos/note/save-note.dto";
// const prismaClient = new PrismaClient();

export class PostgresNoteDataSourceImpl implements NoteDataSource {
  constructor() {}

  async createNote(note: NoteEntity): Promise<NoteEntity> {
    try {
      await prismaClient.note.create({
        data: {
          id: note.id, // Puedes dejar que Prisma genere UUID si es undefined
          title: note.title,
          content: note.content,
          is_pinned: note.isPinned,
          is_archived: note.isArchived,

          created_at: note.createdAt,
          updated_at: note.updatedAt,
          user: {
            connect: { id: note.userId },
          },
          category: {
            connect: { id: note.categoryId },
          },
        } as Prisma.NoteCreateInput,
      });

      return NoteEntity.fromObject({ ...note });
    } catch (error: any) {
      if (error.code === "P2002") {
        throw CustomError.notFound("No se puede crear una nota repetida");
      }
      throw CustomError.badRequest(error.message || "Error al eliminar Nota");
    }
  }

  async saveNoteById(
    noteId: string,
    // userId: string,
    updates: UpdateNoteDTO
  ): Promise<NoteEntity> {
    try {
      const note = await prismaClient.note.findUnique({
        where: { id: noteId },
        select: { user_id: true },
      });

      if (updates.categoryId) {
        const category = await prismaClient.category.findUnique({
          where: { id: updates.categoryId },
        });

        if (category?.user_id !== null) {
          if (!category || category.user_id !== note?.user_id) {
            throw CustomError.forbidden(
              "Invalid category: must belong to the note owner"
            );
          }
        }
      }

      const updatedNote = await prismaClient.note.update({
        where: { id: noteId },
        data: {
          title: updates.title,
          content: updates.content,
          is_pinned: this.toBoolean(updates.isPinned),
          is_archived: this.toBoolean(updates.isArchived),
          category_id: updates.categoryId,
        },
      });

      const noteEntity = NoteEntity.fromObject({
        userId: updatedNote.user_id,
        categoryId: updatedNote.category_id,
        isArchived: updatedNote.is_archived,
        isPinned: updatedNote.is_pinned,
        createdAt: updatedNote.created_at,
        updatedAt: updatedNote.updated_at ?? undefined,
        images: [],
        tags: [],
        id: updatedNote.id,
        title: updatedNote.title!,
        content: updatedNote.content!,
      });

      return noteEntity;
    } catch (error: any) {
      throw CustomError.badRequest(error.message || "Error al guardar la nota");
    }
  }

  async getNotesByUserId(
    page: number,
    limit: number,
    userId: string,
    categoryId?: string,
    tagId?: string,
    isArchived?: string,
    isPinned?: string,
    sortDate?: string,
    sortTitle?: string
  ): Promise<NoteEntity[]> {
    try {
      const skip = (page - 1) * limit;
      const archivedBool = this.toBoolean(isArchived);
      const pinnedBool = this.toBoolean(isPinned);

      const orderBy: any[] = [];

      if (sortDate) {
        orderBy.push({ created_at: sortDate }); // asc o desc
      }

      if (sortTitle) {
        orderBy.push({ title: sortTitle }); // asc o desc
      }

      const prismaNotes = await prismaClient.note.findMany({
        where: {
          // user_id: userId,

          OR: [
            { user_id: userId }, // notas propias
            {
              NoteShare: {
                some: { userId }, // notas compartidas con él
              },
            },
          ],
          ...(categoryId && { category_id: categoryId }),
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

        /*  recupera relaciones  */
        include: {
          tags: {
            include: {
              tag: {
                // ← la entidad real del tag
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
          category: { select: { id: true, name: true, color: true } },
          NoteShare: { select: { userId: true, role: true } }, // 👈 opcional si quieres saber el rol
        },
      });

      /*  Mapea a tu NoteEntity de dominio  */
      return prismaNotes.map((n) =>
        NoteEntity.fromObject({
          id: n.id,
          title: n.title ?? "",
          content: n.content ?? "",
          userId: n.user_id,
          categoryId: n.category_id ?? null,
          isArchived: n.is_archived,
          isPinned: n.is_pinned,
          createdAt: n.created_at,
          updatedAt: n.updated_at,

          /*  aplanar la relación NoteTag → Tag                  */
          tags: n.tags.map(
            (nt) => ({ id: nt.tag.id, name: nt.tag.name } as TagEntity)
          ),

          images: n.images.map(
            (img) =>
              ({
                id: img.id,
                url: img.url,
                altText: img.alt_text ?? undefined,
                createdAt: img.created_at,
                publicId: img.public_id,
              } as NoteImageEntity)
          ),
          category: {
            id: n.category?.id,
            name: n.category?.name,
            color: n.category?.color,
          } as CategoryEntity,
        })
      );
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }

  async getNoteById(noteId: string, userId: string): Promise<NoteEntity | any> {
    try {
      const note = await prismaClient.note.findFirst({
        where: {
          id: noteId,
          OR: [
            { user_id: userId }, // dueño
            { NoteShare: { some: { userId } } }, // compartido
          ],
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              // agrega aquí los campos del usuario que quieras devolver
            },
          },
          category: {
            select: {
              id: true,
              name: true,
              color: true,
            },
          },
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
              public_id: true,
            },
          },
          NoteShare: {
            where: { userId },
            include: {
              user: {
                select: { id: true, name: true, email: true },
              },
            },
          },
        },
      });

      if (!note) {
        return null;
        // throw CustomError.unauthorized(
        //   "Nota no encontrada o no pertenece al usuario"
        // );
      }

      // Adaptar los tags a arreglo simple
      const tags = note.tags.map((nt) => nt.tag);

      // Elegir quién es el usuario actual
      let currentUser;
      if (note.user_id === userId) {
        currentUser = note.user; // dueño
      } else if (note.NoteShare.length > 0) {
        currentUser = note.NoteShare[0].user; // compartido
      }

      return {
        id: note.id,
        title: note.title!,
        content: note.content!,
        isArchived: note.is_archived,
        isPinned: note.is_pinned,
        createdAt: note.created_at,
        updatedAt: note.updated_at,
        category: note.category,
        tags,
        images: note.images,
        owner: note.user, // dueño siempre
        currentUser: currentUser, // el que consulta (dueño o compartido)
      };
    } catch (error: any) {
      throw CustomError.badRequest(error.message || "Error al guardar la nota");
    }
  }

  async canUserEditNote(noteId: string, userId: string): Promise<boolean> {
    try {
      const note = await prismaClient.note.findFirst({
        where: {
          id: noteId,
          OR: [
            { user_id: userId }, // dueño
            { NoteShare: { some: { userId, role: "EDITOR" } } }, // compartido como editor
          ],
        },
        select: { id: true }, // solo necesitas confirmar que existe
      });

      return !!note;
    } catch (error: any) {
      throw CustomError.badRequest(
        error.message || "Error al validar permisos de edición"
      );
    }
  }

  async deleteNoteById(noteId: string, userId: string): Promise<void> {
    try {
      await prismaClient.note.delete({
        where: { id: noteId, user_id: userId },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound(
          "Nota no encontrada para eliminar o no tienes permisos"
        );
      }
      throw CustomError.badRequest(error.message || "Error al eliminar Nota");
    }
  }

  async clearTags(noteId: string): Promise<void> {
    await prismaClient.noteTag.deleteMany({
      where: {
        note_id: noteId,
      },
    });
  }

  async addTagsToNote(noteId: string, tagIds: string[]): Promise<void> {
    const data = tagIds.map((tagId) => ({ note_id: noteId, tag_id: tagId }));
    await prismaClient.noteTag.createMany({
      data,
      skipDuplicates: true, // evita errores por relaciones ya existentes
    });
  }

  async clearImages(noteId: string): Promise<void> {
    await prismaClient.noteImage.deleteMany({
      where: {
        note_id: noteId,
      },
    });
  }

  async addImagesToNote(
    noteId: string,
    images: NoteImageEntity[]
  ): Promise<void> {
    const data = images.map((img) => ({
      id: img.id,
      url: img.url,
      alt_text: img.altText ?? "",
      note_id: noteId,
      public_id: img.publicId,
    }));
    await prismaClient.noteImage.createMany({
      data,
    });
  }

  async getTotals(userId: string): Promise<any> {
    try {
      const [
        totalNote,
        totalTag,
        totalCategory,
        totalImages,
        totalSubNote,
        totalSubImage,
      ] = await Promise.all([
        prismaClient.note.count({ where: { user_id: userId } }),
        prismaClient.tag.count({
          where: {
            OR: [{ user_id: userId }, { user_id: null }],
          },
        }),
        prismaClient.category.count({
          where: {
            OR: [{ user_id: userId }, { user_id: null }],
          },
        }),
        prismaClient.noteImage.count({ where: { note: { user_id: userId } } }),
        prismaClient.subNote.count({ where: { note: { user_id: userId } } }),
        prismaClient.subNoteImage.count({
          where: {
            subNote: {
              note: {
                user_id: userId,
              },
            },
          },
        }),
      ]);

      return {
        totalNote,
        totalTag,
        totalCategory,
        totalImages,
        totalSubNote,
        totalSubImage,
      };
    } catch (error: any) {
      throw CustomError.badRequest(
        error.message || "Error obtener total de datos"
      );
    }
  }

  toBoolean(value?: string | boolean): boolean | undefined {
    if (value === "true") return true;
    if (value === "false") return false;

    return undefined;
  }
}
