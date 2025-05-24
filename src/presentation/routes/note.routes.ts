import { Router } from "express";

import {
  authMiddleware,
  noteController,
} from "../../config/dependency.container";

export class NoteRoutes {
  static get routes(): Router {
    const router = Router();

    router.post(
      "/create",
      [authMiddleware.validateJWT],
      noteController.createNote
    );

    router.get(
      "/notes",
      [authMiddleware.validateJWT],
      noteController.getNotesById
    );

    router.get("/notes/:id", noteController.getNoteById);

    router.put(
      "/save/:id",
      [authMiddleware.validateJWT],
      noteController.saveNoteById
    );

    router.post(
      "/admin/images/cleanup",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      noteController.cleanOrphanImages
    );

    return router;
  }
}
