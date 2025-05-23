import { CustomError } from "../../../domain/errors/custom.error";

import { pgPool } from "../../../data/postgresql/init";
import { CategoryDataSource } from "../../../domain/datasources/category.datasource";
import { CategoryEntity } from "../../../domain/entities/categories.entitie";
import { UserRepository } from "../../../domain/repository/user.repository";
import { UserEntity } from "../../../domain/entities/user.entitie";
import { NoteEntity } from "../../../domain/entities/note.entitie";
import { NoteDataSource } from "../../../domain/datasources/note.datasource";
import { Uuid } from "../../../config/uuid";
import { NoteImageEntity } from "../../../domain/entities/image.entitie";
import { TagEntity } from "../../../domain/entities/tagEntity";

import { Prisma, PrismaClient } from "../../../generated/prisma";
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
          is_pinned: updates.isPinned,
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
    userId: string
  ): Promise<NoteEntity[]> {
    try {
      const skip = (page - 1) * limit;

      const prismaNotes = await prismaClient.note.findMany({
        where: { user_id: userId },
        skip,
        take: limit,
        orderBy: { created_at: "desc" },

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
            select: { id: true, url: true, alt_text: true, created_at: true },
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
              } as NoteImageEntity)
          ),
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

  deleteNoteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
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
    }));
    await prismaClient.noteImage.createMany({
      data,
    });
  }
}
