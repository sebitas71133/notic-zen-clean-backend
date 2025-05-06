import { NextFunction, Request, RequestHandler, Response } from "express";

import { AuthService } from "../services/auth.service";
import { CustomError } from "../../domain/errors/custom.error";
import { UserEntity } from "../../domain/entities/user.entitie";
import { AuthRegisterRequestDTO } from "../dtos/auth/register-user.dto";

import { UpdateUserDTO } from "../dtos/users/update.user.dto";
import { Uuid } from "../../config/uuid";
import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { PaginationUserDTO } from "../dtos/auth/pagination-user.dto";

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

      const users = await this.authService.getUsers(dto.page, dto.limit);
      const count = await this.authService.countUsers();

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
      return res.status(200).json({
        success: true,
        message: "Usuario encontrado",
        data: user, //Por si acaso xd
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

      await this.authService.deleteUserById(id);
      return res.status(200).json({
        success: true,
        message: "Usuario eliminado",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
