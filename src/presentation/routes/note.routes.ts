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

    router.get(
      "/notes/:id",
      [authMiddleware.validateJWT],
      noteController.getNoteById
    );

    router.put(
      "/notes/:id",
      [authMiddleware.validateJWT],
      noteController.saveNoteById
    );

    // router.delete(
    //   "/categories/:id",
    //   [authMiddleware.validateJWT],
    //   categoryController.deleteUserById
    // );

    return router;
  }
}
