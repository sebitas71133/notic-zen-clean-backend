import { Router } from "express";
import {
  adminController,
  authMiddleware,
} from "../../config/dependency.container";

export class AdminRoutes {
  static get routes(): Router {
    const router = Router();

    router.get(
      "/config",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      adminController.getConfig
    );

    router.post(
      "/moderation/toggle",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      adminController.toggleModeration
    );

    router.post(
      "/send-email/toggle",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      adminController.toggleSendEmail
    );

    return router;
  }
}
