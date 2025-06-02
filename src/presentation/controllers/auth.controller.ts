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
import { envs } from "../../config/envs";

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

  public validateEmailtoLogin = async (req: Request, res: Response) => {
    const { token } = req.params;

    try {
      const isValidated = await this.authService.validateEmailtoLogin(token);

      if (isValidated) {
        return res.send(`
        <html>
          <head>
            <title>Email validated</title>
            <meta http-equiv="refresh" content="5;url=${envs.CLIENT_URL}/auth" />
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f0f4f8;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
              }
              .card {
                background: white;
                padding: 2rem;
                border-radius: 1rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                text-align: center;
              }
              h1 {
                color: #2e7d32;
              }
              p {
                color: #555;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <h1>✅ Email successfully validated</h1>
              <p>You will be redirected to the login page shortly...</p>
              <p>If not, <a href="${envs.CLIENT_URL}/auth">click here</a>.</p>
            </div>
          </body>
        </html>
      `);
      }
    } catch (error) {
      if (error instanceof CustomError && error.message.includes("expirado")) {
        return res.send(`
  <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #fff9f9; color: #b00020; text-align: center;">
    <h2 style="margin-bottom: 10px;">Oops... el enlace expiró 😥</h2>
    <p style="margin-bottom: 20px;">Tu enlace de validación ha caducado.</p>
    <form method="GET" action="/api/auth/resend-validation-link" style="display: flex; flex-direction: column; gap: 10px;">
      <input type="email" name="email" placeholder="Ingresa tu correo" required
        style="padding: 10px; font-size: 1em; border: 1px solid #ccc; border-radius: 4px;" />
      <button type="submit" style="padding: 10px; background-color: #b00020; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
        Reenviar enlace
      </button>
    </form>
  </div>
`);
      }
      return this.handleError(error, res);
    }
  };

  public resendEmailValidationLink = async (req: Request, res: Response) => {
    const email = req.query.email as string;

    try {
      if (!email) throw CustomError.badRequest("No email provided");

      const isValidated = await this.authService.resendEmailValidationLink(
        email
      );

      if (isValidated) {
        return res.status(200).send(`
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9; color: #333;">
    <h2 style="color: #4CAF50;">¡Perfecto!</h2>
    <p>Hemos enviado un nuevo enlace de validación a tu correo electrónico.</p>
    <hr style="border:none; border-top:1px solid #ccc; margin: 20px 0;">
    <p style="font-size: 0.9em; color: #666;">
      <strong>Nota:</strong> Si no recibes el correo en los próximos minutos, revisa la carpeta de spam o promociones.<br/>
      Si aún así no lo ves, intenta solicitar el enlace nuevamente o contáctanos para soporte.
    </p>
  </div>
`);
      }

      // En caso de que isValidated sea false, aunque no esté previsto:
      res.status(500).json({
        message:
          "No se pudo enviar el enlace de validación. Intenta nuevamente más tarde.",
      });
    } catch (error) {
      this.handleError(error, res);
    }
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

  public getTotals = async (req: Request, res: Response) => {
    try {
      const documents = await this.authService.getTotals();

      return res.status(200).json({
        success: true,
        message: "Documentos totales",
        data: documents,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public updateRoleByUserId = async (req: Request, res: Response) => {
    try {
      const id = req.body["userId"];

      const newRoleId = +req.body["roleId"];

      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing user ID");
      }

      // if (req.body.user.id !== id) {
      //   throw CustomError.forbidden("No puedes eliminar este usuario");
      // }

      await this.authService.updateRoleByUserId(id, newRoleId);
      return res.status(200).json({
        success: true,
        message: "Rol actualizado",
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
