import { Router } from "express";

import {
  authMiddleware,
  notificationController,
} from "../../config/dependency.container";

export class NotificationRoutes {
  static get routes(): Router {
    const router = Router();

    router.post(
      "/",
      [authMiddleware.validateJWT],
      notificationController.createNotification
    );

    router.get(
      "/",
      [authMiddleware.validateJWT],
      notificationController.getMyNotifications
    );

    //isRead = true, readAt = now()
    router.patch(
      "/:id/read",
      [authMiddleware.validateJWT],
      notificationController.markAsRead
    );

    //Retorna lista de usuarios con su rol
    router.patch(
      "/read-all",
      [authMiddleware.validateJWT],
      notificationController.markAllAsRead
    );

    // Eliminar acceso
    router.delete(
      "/:id",
      [authMiddleware.validateJWT],
      notificationController.deleteNotification
    );

    return router;
  }
}
