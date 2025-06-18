import { AuthService } from "../application/services/auth.service";
import { CategoryService } from "../application/services/category.service";
import { EmailService } from "../application/services/email.service";
import { ImageService } from "../application/services/Image.service";
import { NoteService } from "../application/services/note.service";
import { SettingService } from "../application/services/setting.service";
import { SubNoteService } from "../application/services/subnote.service";
import { TagService } from "../application/services/tags.service";
import { PostgresCategoryDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.category.datasource.impl";
import { PostgresNoteDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.note.datasource.impl";
import { PostgresRoleDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.role.datasource.impl";
import { PostgresSettingDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.setting.datasouce.impl";
import { PostgresSubNoteDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.subnote.datasource";
import { PostgresTagDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.tag.datasource";
import { PostgresUserDataSourceImpl } from "../infrastructure/datasource/postgres/postgres.user.datasource.impl";
import { CategoryRepositoryImpl } from "../infrastructure/repository/category.repository.impl";
import { NoteRepositoryImpl } from "../infrastructure/repository/note.repository.impl";
import { RoleRepositoryImpl } from "../infrastructure/repository/role.repository.impl";
import { SettingRepositoryImpl } from "../infrastructure/repository/setting.repository.impl";
import { SubNoteRepositoryImpl } from "../infrastructure/repository/subnotenote.repository.impl";
import { TagRepositoryImpl } from "../infrastructure/repository/tag.respository.impl";
import { UserRepositoryImpl } from "../infrastructure/repository/user.repository.impl";
import { AdminController } from "../presentation/controllers/admin.controller";
import { AuthController } from "../presentation/controllers/auth.controller";
import { CategoryController } from "../presentation/controllers/category.controller";
import { NoteController } from "../presentation/controllers/note.controller";
import { SubNoteController } from "../presentation/controllers/subnote.controller";
import { TagController } from "../presentation/controllers/tag.controller";
import { AuthMiddleware } from "../presentation/middlewares/auth.middlewares";

import { envs } from "./envs";

// dependency.container.ts
export const roleDataSource = new PostgresRoleDataSourceImpl();
export const roleRepository = new RoleRepositoryImpl(roleDataSource);

export const userDataSource = new PostgresUserDataSourceImpl();
export const userRepository = new UserRepositoryImpl(userDataSource);

export const categoryDataSource = new PostgresCategoryDataSourceImpl(
  userRepository
);
export const categoryRepository = new CategoryRepositoryImpl(
  categoryDataSource
);

//SETTING

export const settingDatasource = new PostgresSettingDataSourceImpl();
export const settingRepository = new SettingRepositoryImpl(settingDatasource);
export const settingSerice = new SettingService(settingRepository);

const emailService = new EmailService(
  envs.MAILER_SERVICE,
  envs.MAILER_EMAIL,
  envs.MAILER_SECRET_KEY,
  settingSerice
);

//TAGS

export const tagDataSource = new PostgresTagDataSourceImpl(userRepository);
export const tagRepository = new TagRepositoryImpl(tagDataSource);
export const tagService = new TagService(tagRepository);

export const imageService = new ImageService(settingSerice);

//NOTE

export const noteDatasource = new PostgresNoteDataSourceImpl();
export const noteRepository = new NoteRepositoryImpl(noteDatasource);
export const noteService = new NoteService(
  tagService,
  noteRepository,
  imageService
);

//SUBNOTE
export const subNoteDatasource = new PostgresSubNoteDataSourceImpl();
export const subNoteRepository = new SubNoteRepositoryImpl(subNoteDatasource);
export const subNoteSerice = new SubNoteService(
  tagService,
  subNoteRepository,
  imageService
);

export const categoryService = new CategoryService(categoryRepository);

export const categoryController = new CategoryController(categoryService);
export const tagController = new TagController(tagService);
export const noteController = new NoteController(noteService, imageService);

export const subNoteController = new SubNoteController(
  subNoteSerice,
  noteService,
  imageService
);

const authService = new AuthService(
  userRepository,
  emailService,
  roleRepository
);

//ADMIN MODERATION

export const adminController = new AdminController(settingSerice);

export const authController = new AuthController(authService);

export const authMiddleware = new AuthMiddleware(userRepository);
