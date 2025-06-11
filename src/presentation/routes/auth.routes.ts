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
import {
  authController,
  authMiddleware,
} from "../../config/dependency.container";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    // const emailService = new EmailService(
    //   envs.MAILER_SERVICE,
    //   envs.MAILER_EMAIL,
    //   envs.MAILER_SECRET_KEY,
    //   envs.SEND_EMAIL
    // );

    // const roleDataSource = new PostgresRoleDataSourceImpl();
    // const roleRepository = new RoleRepositoryImpl(roleDataSource);

    // const userDataSource = new PostgresUserDataSourceImpl(roleRepository);
    // const userRepository = new UserRepositoryImpl(userDataSource);

    // const authMiddleware = new AuthMiddleware(userRepository);

    // const authService = new AuthService(
    //   userRepository,
    //   emailService,
    //   roleRepository
    // );
    // const controller = new AuthController(authService);

    router.post("/register", authController.registerUser);
    router.post("/login", authController.loginUser);
    router.get("/new", authController.validateToken);
    router.get("/validate-email/:token", authController.validateEmailtoLogin);
    router.get(
      "/resend-validation-link",
      authController.resendEmailValidationLink
    );

    router.get(
      "/users",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getUsers
    );
    router.get(
      "/users/email/",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getUserByEmail
    );

    router.get(
      "/users/documents",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getTotals
    );

    router.get(
      "/users/:id",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getUserById
    );

    router.put(
      "/users/:id",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.updateUserById
    );
    router.delete(
      "/users/:id",
      [authMiddleware.validateJWT],
      authController.deleteUserById
    );

    router.post(
      "/users/update-role",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.updateRoleByUserId
    );

    // router.post("/login",controller.loginUser)

    return router;
  }
}
