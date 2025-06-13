import { Router } from "express";
import {
  adminController,
  authMiddleware,
} from "../../config/dependency.container";

export class AdminRoutes {
  static get routes(): Router {
    const router = Router();

    //Configurar moderacion o enviar email
    router.get(
      "/config",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      adminController.getConfig
    );

    //Cambiar estado de moderacion
    router.post(
      "/moderation/toggle",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      adminController.toggleModeration
    );

    //Cambiar estado de enviar email
    router.post(
      "/send-email/toggle",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      adminController.toggleSendEmail
    );

    return router;
  }
}
