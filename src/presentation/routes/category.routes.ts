import { Router } from "express";

import {
  authMiddleware,
  categoryController,
} from "../../config/dependency.container";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();

    //Crear categoria, body : name, color
    router.post(
      "/create",
      [authMiddleware.validateJWT],
      categoryController.createCategory
    );

    //Categorias by user, query : page, limit
    router.get(
      "/categories",
      [authMiddleware.validateJWT],
      categoryController.getCategoriesById
    );

    //Obtener determinada categoria, params: id
    router.get(
      "/categories/:id",
      [authMiddleware.validateJWT],
      categoryController.getCategoryById
    );

    //Actualizar determinada categoria, params: id, body : name?, color?
    router.put(
      "/categories/:id",
      [authMiddleware.validateJWT],
      categoryController.updateCategoryById
    );

    //Borrar determinada categoria, params: id
    router.delete(
      "/categories/:id",
      [authMiddleware.validateJWT],
      categoryController.deleteCategoryrById
    );

    return router;
  }
}
