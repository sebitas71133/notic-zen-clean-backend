import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

import { AuthMiddleware } from "../middlewares/auth.middlewares";
import { envs } from "../../config/envs";
import { EmailService } from "../services/email.service";

import { PostgresRoleDataSourceImpl } from "../../infrastructure/datasource/postgres/postgres.role.datasource.impl";

import { RoleRepositoryImpl } from "../../infrastructure/repository/role.repository.impl";
import { PostgresUserDataSourceImpl } from "../../infrastructure/datasource/postgres/postgres.user.datasource.impl";
import { UserRepositoryImpl } from "../../infrastructure/repository/user.repository.impl";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.SEND_EMAIL
    );

    //DATASOURCES
    //PostgresUserDataSourceImpl
    // const userDataSource = new FileNoteDataSourceImpl();
    const roleDataSource = new PostgresRoleDataSourceImpl();
    const roleRepository = new RoleRepositoryImpl(roleDataSource);

    const userDataSource = new PostgresUserDataSourceImpl(roleRepository);
    const userRepository = new UserRepositoryImpl(userDataSource);

    const service = new AuthService(
      userRepository,
      emailService,
      roleRepository
    );
    const controller = new AuthController(service);

    const authMiddleware = new AuthMiddleware(userRepository);

    router.post("/register", controller.registerUser);
    router.post("/login", controller.loginUser);
    router.get("/new", controller.validateToken);
    router.get("/validate-email/:token", controller.validateEmailtoLogin);
    router.get("/resend-validation-link", controller.resendEmailValidationLink);

    router.get(
      "/users",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      controller.getUsers
    );
    router.get(
      "/users/email/",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      controller.getUserByEmail
    );
    router.get(
      "/users/:id",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      controller.getUserById
    );
    router.put(
      "/users/:id",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      controller.updateUserById
    );
    router.delete(
      "/users/:id",
      [authMiddleware.validateJWT],
      controller.deleteUserById
    );

    router.post(
      "/users/update-role",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      controller.updateRoleByUserId
    );

    // router.post("/login",controller.loginUser)

    return router;
  }
}
