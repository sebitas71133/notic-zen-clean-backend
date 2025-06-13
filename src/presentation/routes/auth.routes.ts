import { Router } from "express";

import {
  authController,
  authMiddleware,
} from "../../config/dependency.container";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    //POST Registro, body : name,email, passowrd, image?
    router.post("/register", authController.registerUser);

    //POST Login, body : email y password
    router.post("/login", authController.loginUser);

    //GET Validar y genera nuevo token, header : "Authorizacion" con el token
    router.get("/new", authController.validateToken);

    //GET Endpoint que se envia al correo del usuario para validar el email registrado y manda mensaje de exito o no
    router.get("/validate-email/:token", authController.validateEmailtoLogin);

    //GET Reenviar mensaje al correo para validar el mismo
    router.get(
      "/resend-validation-link",
      authController.resendEmailValidationLink
    );

    //GET usuarios por el admin, query : page? y limit?
    router.get(
      "/users",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getUsers
    );

    //GET usuario mediante su correo por el admin, query : email
    router.get(
      "/users/email/",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getUserByEmail
    );

    //GET cantidad total de registro de todas las entidades(user, note, tag, category, noteImage, subNote, subNoteImage)
    router.get(
      "/users/documents",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getTotals
    );

    //GET usuario  por admin mediante su Id, params : id
    router.get(
      "/users/:id",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.getUserById
    );

    //PUT usuario  por admin mediante su Id, params : id
    router.put(
      "/users/:id",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.updateUserById
    );

    //DELETE usuario por admin  mediante su Id, params : id
    router.delete(
      "/users/:id",
      [authMiddleware.validateJWT],
      authController.deleteUserById
    );

    //POST actualizar el rol de un determinado usuario, body : userId, roleId
    router.post(
      "/users/update-role",
      [authMiddleware.validateJWT, authMiddleware.isAdmin],
      authController.updateRoleByUserId
    );

    return router;
  }
}
