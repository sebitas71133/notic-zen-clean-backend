import { Router } from "express";

import {
  authMiddleware,
  noteController,
} from "../../config/dependency.container";

export class ShareRoutes {
  static get routes(): Router {
    const router = Router();

    //buscar usuario por email, crear NoteShare
    // Input: { email: "user@example.com", role: "VIEWER" }

    router.post(
      "/notes/:noteId/share",
      [authMiddleware.validateJWT],
      noteController.shareNote
    );

    router.put(
      "/notes/:noteId/share/:userId",
      [authMiddleware.validateJWT],
      noteController.updateShareRole
    );

    //Retorna lista de usuarios con su rol
    router.delete(
      "/notes/:noteId/share/:userId",
      [authMiddleware.validateJWT],
      noteController.deleteShare
    );

    router.get(
      "/notes/:noteId/share",
      [authMiddleware.validateJWT],
      noteController.getSharedUsersByNote
    );

    return router;
  }
}
