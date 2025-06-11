import { Router } from "express";

import {
  authMiddleware,
  tagController,
} from "../../config/dependency.container";

export class TagRoutes {
  static get routes(): Router {
    const router = Router();

    router.post(
      "/create",
      [authMiddleware.validateJWT],
      tagController.createTag
    );

    router.get("", [authMiddleware.validateJWT], tagController.getTags);
    router.get("/:id", [authMiddleware.validateJWT], tagController.getTagById);

    router.put(
      "/:id",
      [authMiddleware.validateJWT],
      tagController.updateTagById
    );

    router.delete(
      "/:id",
      [authMiddleware.validateJWT],
      tagController.deleteTagById
    );

    return router;
  }
}
