import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

import { NoteRepositoryImpl } from "../../infrastructure/repository/note.repository.impl";
import { FileNoteDataSource } from "../../infrastructure/datasource/file.note.datasource";
import { AuthMiddleware } from "../middlewares/auth.middlewares";
import { envs } from "../../config/envs";
import { EmailService } from "../services/email.service";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.SEND_EMAIL
    );

    // const userDataSource = new MongoNoteDataSource();
    const userDataSource = new FileNoteDataSource();

    const userRepository = new NoteRepositoryImpl(userDataSource);
    const service = new AuthService(userRepository, emailService);
    const controller = new AuthController(service);

    const authMiddleware = new AuthMiddleware(userRepository);

    router.post("/register", controller.registerUser);
    router.post("/login", controller.loginUser);
    router.get("/validate-email/:token", controller.ValidateEmail);
    router.get("/users", controller.getUsers);
    router.get("/users/email/", controller.getUserByEmail);
    router.get("/users/:id", controller.getUserById);
    router.put("/users/:id", controller.updateUserById);
    router.delete(
      "/users/:id",
      [authMiddleware.validateJWT],
      controller.deleteUserById
    );

    // router.post("/login",controller.loginUser)

    return router;
  }
}
