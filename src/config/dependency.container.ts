import { NoteDataSource } from "../domain/datasources/note.datasource";
import { PostgresCategoryDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.category.datasource.impl";
import { PostgresNoteDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.note.datasource.impl";
import { PostgresRoleDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.role.datasource.impl";
import { PostgresTagDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.tag.datasource";
import { PostgresUserDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.user.datasource.impl";
import { CategoryRepositoryImpl } from "../infrastructure/repository/category.repository.impl";
import { NoteRepositoryImpl } from "../infrastructure/repository/note.repository.impl";
import { RoleRepositoryImpl } from "../infrastructure/repository/role.repository.impl";
import { TagRepositoryImpl } from "../infrastructure/repository/tag.respository.impl";
import { UserRepositoryImpl } from "../infrastructure/repository/user.repository.impl";
import { CategoryController } from "../presentation/controllers/category.controller";
import { NoteController } from "../presentation/controllers/note.controller";
import { TagController } from "../presentation/controllers/tag.controller";
import { AuthMiddleware } from "../presentation/middlewares/auth.middlewares";
import { CategoryService } from "../presentation/services/category.service";
import { ImageService } from "../presentation/services/Image.service";
import { NoteService } from "../presentation/services/note.service";
import { TagService } from "../presentation/services/tags.service";

// dependency.container.ts
export const roleDataSource = new PostgresRoleDataSourceImpl();
export const roleRepository = new RoleRepositoryImpl(roleDataSource);

export const userDataSource = new PostgresUserDataSourceImpl(roleRepository);
export const userRepository = new UserRepositoryImpl(userDataSource);

export const categoryDataSource = new PostgresCategoryDataSourceImpl(
  userRepository
);
export const categoryRepository = new CategoryRepositoryImpl(
  categoryDataSource
);

//TAGS

export const tagDataSource = new PostgresTagDataSourceImpl(userRepository);
export const tagRepository = new TagRepositoryImpl(tagDataSource);
export const tagService = new TagService(tagRepository);
export const imageService = new ImageService();

//NOTE

export const noteDatasource = new PostgresNoteDataSourceImpl();
export const noteRepository = new NoteRepositoryImpl(noteDatasource);
export const noteSerice = new NoteService(
  tagService,
  noteRepository,
  imageService
);

export const categoryService = new CategoryService(categoryRepository);
export const categoryController = new CategoryController(categoryService);
export const tagController = new TagController(tagService);
export const noteController = new NoteController(noteSerice, imageService);

export const authMiddleware = new AuthMiddleware(userRepository);
