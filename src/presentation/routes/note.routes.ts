import { Router } from "express";

import {
  authMiddleware,
  noteController,
  subNoteController,
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

    router.get(
      "/stats",
      [authMiddleware.validateJWT],
      noteController.getTotals
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

    // NOTES - ADMIN

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

    // SUBNOTES

    router.get(
      "/:noteId/subnotes",
      [authMiddleware.validateJWT],
      subNoteController.getSubNotesByNoteId
    );

    router.post(
      "/:noteId/subnotes",
      [authMiddleware.validateJWT],
      subNoteController.createSubNote
    );

    router.get(
      "/:noteId/subnotes/:subNoteId",
      [authMiddleware.validateJWT],
      subNoteController.getSubNoteById
    );

    router.put(
      "/:noteId/subnotes/:subNoteId",
      [authMiddleware.validateJWT],
      subNoteController.saveSubNoteById
    );

    router.delete(
      "/:noteId/subnotes/:subNoteId",
      [authMiddleware.validateJWT],
      subNoteController.deleteSubNoteById
    );

    router.post(
      "/admin/sub-images/cleanup",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      subNoteController.cleanOrphanSubImages
    );

    router.get(
      "/admin/sub-images/all",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      subNoteController.getAllSubImages
    );

    return router;
  }
}
