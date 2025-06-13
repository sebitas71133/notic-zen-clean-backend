import { Router } from "express";

import {
  authMiddleware,
  noteController,
  subNoteController,
} from "../../config/dependency.container";

export class NoteRoutes {
  static get routes(): Router {
    const router = Router();

    //body : title, categoryId, content? ,images?, tags?
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

    //params : id, body : title, categoryId, content? ,images?, tags?,isPinned?,isArchived?
    router.put(
      "/save/:id",
      [authMiddleware.validateJWT],
      noteController.saveNoteById
    );

    //params : id
    router.delete(
      "/notes/:id",
      [authMiddleware.validateJWT],
      noteController.deleteNoteById
    );

    // NOTES - ADMIN

    //Limpieza de imagenes huerfanas de las notas
    router.post(
      "/admin/images/cleanup",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      noteController.cleanOrphanImages
    );

    //Obtener todas las imagenes de las notas
    router.get(
      "/admin/images/all",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      noteController.getAllImages
    );

    // SUBNOTES

    //params : noteId, query : page? , limit?, tagId?, isPinned?, isArchived?, sortDate?, sortTitle?
    router.get(
      "/:noteId/subnotes",
      [authMiddleware.validateJWT],
      subNoteController.getSubNotesByNoteId
    );

    //Obtener todas las subnotes
    router.get(
      "/subnotes",
      [authMiddleware.validateJWT],
      subNoteController.getAllSubNotesByUserId
    );

    //params : noteId , body : title, description?, tags?, images?
    router.post(
      "/:noteId/subnotes",
      [authMiddleware.validateJWT],
      subNoteController.createSubNote
    );

    //params : noteId , subNoteId
    router.get(
      "/:noteId/subnotes/:subNoteId",
      [authMiddleware.validateJWT],
      subNoteController.getSubNoteById
    );

    //params : noteId , subNoteId, body : title, description?, tags?, images?
    router.put(
      "/:noteId/subnotes/:subNoteId",
      [authMiddleware.validateJWT],
      subNoteController.saveSubNoteById
    );

    //params : noteId , subNoteId
    router.delete(
      "/:noteId/subnotes/:subNoteId",
      [authMiddleware.validateJWT],
      subNoteController.deleteSubNoteById
    );

    //Limpieza de imagenes huerfanas de las subnotas
    router.post(
      "/admin/sub-images/cleanup",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      subNoteController.cleanOrphanSubImages
    );

    //Obtener todas las imagenes de las subnotas
    router.get(
      "/admin/sub-images/all",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      subNoteController.getAllSubImages
    );

    return router;
  }
}
