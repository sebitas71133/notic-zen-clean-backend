import fs from "fs";
import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config/jwt.adapter";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";
import { UserRepository } from "../../domain/repository/user.repository";

export class AuthMiddleware {
  constructor(private readonly userRepository: UserRepository) {}

  validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.header("Authorization");

    if (!authorization)
      return res.status(401).json({ error: "No token provided" });

    if (!authorization.startsWith("Bearer "))
      return res.status(401).json({ error: "Invalid Bearer" });

    const token = authorization.split(" ").at(1) || "";

    try {
      const payload = await JwtAdapter.validateToken<{ id: string }>(token);

      if (!payload) return res.status(401).json({ error: "Invalid token" });

      // let users: UserEntity[] = [];

      // if (!fs.existsSync("fileUsers/users.json")) {
      //   throw CustomError.notFound(`No users file found.`);
      // }

      // const fileData = fs.readFileSync("fileUsers/users.json", "utf-8");
      // users = JSON.parse(fileData);

      // //Buscar usuario
      // const user = users.find((e) => e.id === payload.id);

      const user = await this.userRepository.findUserById(payload.id);

      if (!user) return res.status(401).json({ error: "Invalid token - user" });

      req.body.user = UserEntity.create(user);

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal sever error" });
    }
  };
}
