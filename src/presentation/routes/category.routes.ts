import { Router } from "express";

import {
  authMiddleware,
  categoryController,
} from "../../config/dependency.container";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();

    router.post(
      "/create",
      [authMiddleware.validateJWT],
      categoryController.createCategory
    );

    router.get(
      "/categories",
      [authMiddleware.validateJWT],
      categoryController.getCategoriesById
    );
    router.get(
      "/categories/:id",
      [authMiddleware.validateJWT],
      categoryController.getCategoryById
    );

    router.put(
      "/categories/:id",
      [authMiddleware.validateJWT],
      categoryController.updateCategoryById
    );

    router.delete(
      "/categories/:id",
      [authMiddleware.validateJWT],
      categoryController.deleteCategoryrById
    );

    return router;
  }
}
