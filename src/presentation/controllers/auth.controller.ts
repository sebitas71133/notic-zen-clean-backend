import { NextFunction, Request, RequestHandler, Response } from "express";

import { AuthService } from "../services/auth.service";
import { CustomError } from "../../domain/errors/custom.error";
import { UserEntity } from "../../domain/entities/user.entitie";
import { AuthRegisterRequestDTO } from "../dtos/auth/register-user.dto";

import { UpdateUserDTO } from "../dtos/users/update.user.dto";
import { Uuid } from "../../config/uuid";
import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { PaginationUserDTO } from "../dtos/auth/pagination-user.dto";
import { JwtAdapter } from "../../config/jwt.adapter";

export class AuthController {
  //DI ?
  constructor(private readonly authService: AuthService) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public registerUser: RequestHandler = async (req: Request, res: Response) => {
    try {
      //1.  Validar el input con el DTO

      const userDTO = AuthRegisterRequestDTO.createDTO(req.body);

      //3. Usar servicio

      console.log(userDTO);

      const { user, token } = await this.authService.saveUser(userDTO);

      return res.status(201).json({
        success: true,
        message: "Usuario registrado con éxito",
        data: user,
        token,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public loginUser: RequestHandler = async (req: Request, res: Response) => {
    try {
      //1.  Validar el input con el DTO
      const userDTO = LoginUserDto.create(req.body);

      //3. Usar servicio

      const { userEntity, token } = await this.authService.loginUser(userDTO);

      return res.status(200).json({
        success: true,
        message: "Usuario logueado con éxito",
        data: userEntity,
        token,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public ValidateEmail = async (req: Request, res: Response) => {
    const { token } = req.params;

    try {
      const isValidated = await this.authService.validateEmail(token);
      if (isValidated) {
        res.json("The email was successfully validated.");
      }
    } catch (error) {
      this.handleError(error, res);
    }

    this.authService;
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const dto = PaginationUserDTO.createDTO(req.query);

      const [users, count] = await Promise.all([
        this.authService.getUsers(dto.page, dto.limit),
        this.authService.countUsers(),
      ]);

      return res.status(200).json({
        success: true,
        message: "Usuarios registrados",
        total: count,
        ...dto,
        data: users ?? [], //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];

      const user = await this.authService.getUserById(id);
      return res.status(200).json({
        success: true,
        message: "Usuario encontrado",
        data: user, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public getUserByEmail = async (req: Request, res: Response) => {
    try {
      const email = req.query.email as string;

      const user = await this.authService.getUserByEmail(email);

      const { password_hash, ...data } = user;

      return res.status(200).json({
        success: true,
        message: "Usuario encontrado",
        data: data, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public updateUserById = async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const id = req.params["id"];

      // if (!Uuid.isUUID(id) || !id) {
      //   throw CustomError.badRequest("Invalid or missing user ID");
      // }

      const updateUserDTO = UpdateUserDTO.createDTO(data);

      const user = await this.authService.updateUserById(id, updateUserDTO);
      return res.status(200).json({
        success: true,
        message: "Usuario actualizado",
        data: user, //Por si acaso xd
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public deleteUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params["id"];

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing user ID");
      }

      if (req.body.user.id !== id) {
        throw CustomError.forbidden("No puedes eliminar este usuario");
      }

      await this.authService.deleteUserById(id);
      return res.status(200).json({
        success: true,
        message: "Usuario eliminado",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public validateToken = async (req: Request, res: Response) => {
    try {
      const authorization = req.header("Authorization");

      if (!authorization)
        return res.status(401).json({ error: "No token provided" });

      if (!authorization.startsWith("Bearer "))
        return res.status(401).json({ error: "Invalid Bearer" });

      const token = authorization.split(" ").at(1) || "";

      const payload = await JwtAdapter.validateToken<{
        id: string;
        iat: number;
        exp: number;
      }>(token); //

      if (!payload) return res.status(401).json({ error: "Invalid token" });

      const user = await this.authService.getUserById(payload.id);
      if (!user) return res.status(401).json({ error: "User not found" });

      const currentTime = Math.floor(Date.now() / 1000); // tiempo actual en segundos
      const exp = payload.exp;

      const timeLeft = exp - currentTime;

      // Si el token tiene más de 30 minutos restantes, no renueves
      if (timeLeft > 60 * 30) {
        return res.json({
          ok: true,
          data: user,
          msg: "Token validated successfully",
          token,
        }); // Devuelve el mismo token
      }

      //Generate a new token
      const newToken = await this.authService.generateTokenService(payload.id);

      return res.json({
        ok: true,
        msg: "Token validated successfully",
        data: user,
        token: newToken,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Server error while validating token",
      });
    }
  };
}
