import { Router } from "express";

import {
  authController,
  authMiddleware,
} from "../../config/dependency.container";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

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

    return router;
  }
}
