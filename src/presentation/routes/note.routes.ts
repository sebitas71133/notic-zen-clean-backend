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

    router.delete(
      "/notes/:id",
      [authMiddleware.validateJWT],
      noteController.deleteNoteById
    );

    router.post(
      "/admin/images/cleanup",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      noteController.cleanOrphanImages
    );

    router.get(
      "/admin/images/all",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      noteController.getAllImages
    );

    return router;
  }
}
