import { Router } from "express";

import {
  authMiddleware,
  subNoteController,
} from "../../config/dependency.container";

export class SubNoteRoutes {
  static get routes(): Router {
    const router = Router();

    // router.post(
    //   "/:noteId",
    //   [authMiddleware.validateJWT],
    //   subNoteController.createNote
    // );

    // router.get(
    //   "/notes",
    //   [authMiddleware.validateJWT],
    //   subNoteController.getNotesById
    // );

    // router.get("/notes/:id", subNoteController.getNoteById);

    // router.put(
    //   "/save/:id",
    //   [authMiddleware.validateJWT],
    //   subNoteController.saveNoteById
    // );

    // router.delete(
    //   "/notes/:id",
    //   [authMiddleware.validateJWT],
    //   subNoteController.deleteNoteById
    // );

    // router.post(
    //   "/admin/images/cleanup",
    //   [authMiddleware.validateJWT, authMiddleware.isAdmin],
    //   subNoteController.cleanOrphanImages
    // );

    // router.get(
    //   "/admin/images/all",
    //   [authMiddleware.validateJWT, authMiddleware.isAdmin],
    //   subNoteController.getAllImages
    // );

    return router;
  }
}
