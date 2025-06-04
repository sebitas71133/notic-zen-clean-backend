import { CustomError } from "../../../domain/errors/custom.error";

import { NoteEntity } from "../../../domain/entities/note.entitie";
import { NoteDataSource } from "../../../domain/datasources/note.datasource";

import { NoteImageEntity } from "../../../domain/entities/image.entitie";
import { TagEntity } from "../../../domain/entities/tagEntity";

import { Prisma, PrismaClient } from "../../../generated/prisma";
import { CategoryEntity } from "../../../domain/entities/categories.entitie";
const prismaClient = new PrismaClient();

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
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }

  //throw new Error("xd");

  async saveNoteById(
    noteId: string,
    userId: string,
    updates: Partial<NoteEntity>
  ): Promise<NoteEntity> {
    try {
      const updatedNote = await prismaClient.note.update({
        where: { id: noteId, user_id: userId },
        data: {
          title: updates.title,
          content: updates.content,
          is_pinned: this.toBoolean(updates.isPinned),
          is_archived: this.toBoolean(updates.isArchived),
          category_id: updates.categoryId,
          updated_at: updates.updatedAt ?? new Date(),
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

      console.log({ isPinned, isArchived });

      const orderBy: any[] = [];

      if (sortDate) {
        orderBy.push({ created_at: sortDate }); // asc o desc
      }

      if (sortTitle) {
        orderBy.push({ title: sortTitle }); // asc o desc
      }

      const prismaNotes = await prismaClient.note.findMany({
        where: {
          user_id: userId,
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
    const note = await prismaClient.note.findFirst({
      where: {
        id: noteId,
        user_id: userId,
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
      },
    });

    if (!note) {
      throw new Error("Nota no encontrada o no pertenece al usuario");
    }

    // Adaptar los tags a arreglo simple
    const tags = note.tags.map((nt) => nt.tag);

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
      userId: note.user.id,
    };
  }

  async deleteNoteById(noteId: string): Promise<void> {
    try {
      await prismaClient.note.delete({
        where: { id: noteId },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound("Nota no encontrada para eliminar");
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

  toBoolean(value?: string | boolean): boolean | undefined {
    if (value === "true") return true;
    if (value === "false") return false;

    return undefined;
  }
}
