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

export class PostgresNoteDataSourceImpl implements NoteDataSource {
  constructor() {}

  async createNote(note: NoteEntity): Promise<NoteEntity> {
    try {
      const { id, userId } = note;

      const result = await pgPool.query(
        `INSERT INTO notes (id,  user_id)
      VALUES ($1, $2)
      RETURNING *`,
        [id, userId]
      );

      const newNote: { [key: string]: any } = result.rows[0];

      return NoteEntity.fromObject({
        id: newNote.id,
        title: newNote.title,
        content: newNote.content,
        userId: newNote.user_id,
        categoryId: newNote.category_id,
        isArchived: newNote.is_archived,
        isPinned: newNote.is_pinned,
        createdAt: newNote.created_at,
        updatedAt: newNote.updated_at,
        images: newNote.images,
        tags: newNote.tags,
      });
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }

  async getNotesByUserId(
    page: number,
    limit: number,
    userId: string
  ): Promise<NoteEntity[]> {
    try {
      const offset = (page - 1) * limit;

      const result = await pgPool.query(
        "SELECT * FROM get_notes_paginated($1, $2, $3)",
        [userId, limit, offset]
      );

      const notes = result.rows.map((row) =>
        NoteEntity.fromObject({
          id: row.id,
          title: row.title,
          content: row.content,
          userId: row.user_id,
          categoryId: row.category_id,
          isArchived: row.is_archived,
          isPinned: row.is_pinned,
          createdAt: row.created_at,
          updatedAt: row.updated_at,
          tags: row.tags, // array de tags
          images: row.images, // array de imágenes
        })
      );

      return notes;
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }

  async getNoteById(
    noteId: string,
    userId: string
  ): Promise<NoteEntity | null> {
    try {
      const result = await pgPool.query("SELECT * FROM get_note($1, $2)", [
        noteId,
        userId,
      ]);

      const note = result.rows[0];

      if (!note) {
        throw CustomError.notFound(
          "Nota no encontrada o no pertenece al usuario"
        );
      }

      const noteEntity = NoteEntity.fromObject({
        id: note.id,
        title: note.title,
        content: note.content,
        userId: note.user_id,
        categoryId: note.category_id,
        isArchived: note.is_archived,
        isPinned: note.is_pinned,
        createdAt: note.created_at,
        updatedAt: note.updated_at,
        images: note.images ?? [],
        tags: note.tags ?? [],
      });

      return noteEntity;
    } catch (error: any) {
      throw error;
    }
  }
  async saveNoteById(
    noteId: string,
    userId: string,
    updates: Partial<NoteEntity>
  ): Promise<NoteEntity> {
    const client = await pgPool.connect();
    console.log({ updates });
    try {
      const images = updates.images?.map((img) =>
        NoteImageEntity.create({
          url: img.url,
          altText: img.altText ?? "",
          noteId: noteId,
        })
      );

      const tags = updates.tags?.map((tag) =>
        TagEntity.create({
          name: tag.name,
          userId: userId,
        })
      );

      const validEntity = NoteEntity.updated({
        ...updates,
        images,
        tags,
      });

      await client.query("BEGIN");
      console.log(validEntity.categoryId);
      const data = await client.query(
        `SELECT id FROM notes WHERE id = $1 AND user_id = $2`,
        [noteId, userId]
      );
      if (data.rows.length === 0) {
        throw CustomError.forbidden("La nota no existe o no te pertenece");
      }

      // 1. ACTUALIZAR NOTA PRINCIPAL
      await client.query(
        `UPDATE notes SET
        title = $1,
        content = $2,
        is_pinned = $3,
        category_id = $4,
        updated_at = $5
      WHERE id = $6 AND user_id = $7`,
        [
          validEntity.title,
          validEntity.content,
          validEntity.isPinned,
          validEntity.categoryId,
          validEntity.updatedAt,
          noteId,
          userId,
        ]
      );

      // 2. REEMPLAZAR IMÁGENES
      await client.query("DELETE FROM note_images WHERE note_id = $1", [
        noteId,
      ]);

      for (const img of validEntity.images ?? []) {
        await client.query(
          `INSERT INTO note_images (id, url, alt_text, note_id, created_at)
         VALUES ($1, $2, $3, $4, $5)`,
          [img.id, img.url, img.altText, noteId, img.createdAt]
        );
      }

      // 3. REEMPLAZAR TAGS
      await client.query("DELETE FROM note_tags WHERE note_id = $1", [noteId]);

      for (const tag of validEntity.tags ?? []) {
        // Primero, insertar el tag si no existe aún
        const tagResult = await client.query(
          `INSERT INTO tags (id, name, user_id)
         VALUES ($1, $2, $3)
         ON CONFLICT (name, user_id) DO UPDATE SET name = EXCLUDED.name
         RETURNING id`,
          [tag.id, tag.name, userId]
        );

        const tagId = tagResult.rows[0].id;

        // Luego vincularlo con la nota
        await client.query(
          `INSERT INTO note_tags (note_id, tag_id) VALUES ($1, $2)`,
          [noteId, tagId]
        );
      }

      await client.query("COMMIT");

      // OPCIONAL: Retornar la nota actualizada desde la BD
      const { rows } = await client.query(
        `SELECT * FROM notes WHERE id = $1 AND user_id = $2`,
        [noteId, userId]
      );

      if (rows.length === 0) {
        throw CustomError.notFound("Nota no encontrada");
      }

      return rows[0]; // o puedes mapear a NoteEntity si quieres
    } catch (error: any) {
      await client.query("ROLLBACK");
      throw CustomError.badRequest(error.message || "Error al guardar la nota");
    } finally {
      client.release();
    }
  }

  deleteNoteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  // constructor(private readonly userRepository: UserRepository) {}

  // async createNote(note: NoteEntity): Promise<NoteEntity> {
  //   try {
  //     const { id, name, color, user } = note;

  //     await pgPool.query(
  //       `INSERT INTO categories (id,name,color,user_id) VALUES($1,$2,$3,$4) `,
  //       [id, name, color, user.id]
  //     );

  //     return CategoryEntity.fromObject({ ...category });
  //   } catch (error: any) {
  //     throw CustomError.badRequest(error.detail);
  //   }
  // }
  // // async getCategoriesById(
  //   page: number,
  //   limit: number,
  //   user: UserEntity
  // ): Promise<CategoryEntity[]> {
  //   try {
  //     console.log(user);

  //     const offset = (page - 1) * limit;
  //     console.log(offset);
  //     const result = await pgPool.query(
  //       "SELECT * FROM get_categories_paginated($1, $2, $3)",
  //       [limit, offset, user.id]
  //     );

  //     const categories = result.rows;

  //     return categories;
  //   } catch (error: any) {
  //     console.log(error);
  //     throw CustomError.badRequest(error.detail);
  //   }
  // }
  // async getCategoryById(id: string): Promise<CategoryEntity | null> {
  //   try {
  //     const result = await pgPool.query(
  //       "SELECT * FROM categories WHERE id = $1",
  //       [id]
  //     );

  //     const row = result.rows[0];
  //     if (!row)
  //       throw CustomError.notFound(`No category file found with id : ${id}`);

  //     const user = await this.userRepository.findUserById(row.user_id);
  //     if (!user) throw CustomError.notFound("User not found");

  //     return CategoryEntity.fromObject({
  //       ...row,
  //       user,
  //     });
  //   } catch (error: any) {
  //     throw error;
  //   }
  // }
  // async updateCategoryById(
  //   id: string,
  //   updates: Partial<CategoryEntity>
  // ): Promise<void> {
  //   try {
  //     const fields: string[] = [];
  //     const values: any[] = [];
  //     let i = 1;

  //     for (const [key, value] of Object.entries(updates)) {
  //       if (value !== undefined) {
  //         fields.push(`${key} = $${i}`);
  //         values.push(value);
  //         i++;
  //       }
  //     }

  //     if (fields.length === 0)
  //       throw CustomError.notFound("No hay campos a actualizar"); // No hay campos a actualizar

  //     values.push(id);
  //     const query = `UPDATE categories SET ${fields.join(
  //       ", "
  //     )} WHERE id = $${i} `;
  //     await pgPool.query(query, values);
  //   } catch (error: any) {
  //     throw error;
  //     //  throw CustomError.badRequest(error.detail);
  //   }
  // }
  // async deleteCategoryById(id: string): Promise<void> {
  //   try {
  //     const query = `DELETE FROM categories  WHERE id = $1 `;
  //     await pgPool.query(query, [id]);
  //   } catch (error: any) {
  //     throw CustomError.badRequest(error.detail);
  //   }
  // }
}
