import { Router } from "express";

import {
  authMiddleware,
  notificationController,
} from "../../config/dependency.container";

export class NotificationRoutes {
  static get routes(): Router {
    const router = Router();

    // router.post(
    //   "/",
    //   [authMiddleware.validateJWT],
    //   notificationController.createNotification
    // );

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

    //Marcar notificaciones como leidas
    router.patch(
      "/read-all",
      [authMiddleware.validateJWT],
      notificationController.markAllAsRead
    );

    router.delete(
      "/:id",
      [authMiddleware.validateJWT],
      notificationController.deleteNotification
    );

    return router;
  }
}
