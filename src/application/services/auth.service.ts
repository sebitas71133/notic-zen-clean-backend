import { BycripAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { Uuid } from "../../config/uuid";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { envs } from "../../config/envs";
import { EmailService } from "./email.service";
import { RoleName } from "../../domain/enums/role.enum";

import { RoleRepository } from "../../domain/repository/role.repository";
import { UserRepository } from "../../domain/repository/user.repository";
import { AuthRegisterRequestDTO } from "../../presentation/dtos/auth/register-user.dto";
import { LoginUserDto } from "../../presentation/dtos/auth/login-user.dto";

export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService,
    private readonly roleRepository: RoleRepository
  ) {}

  saveUser = async (userDTO: AuthRegisterRequestDTO) => {
    try {
      const existUser = await this.userRepository.existUserByEmail(
        userDTO.email
      );

      if (existUser)
        throw CustomError.notFound(`That email is already registered `);
      //2. Crear Entidad

      const roleName = await this.roleRepository.getRoleByName(RoleName.USER);

      const userEntity = UserEntity.create({
        name: userDTO.name,
        email: userDTO.email,
        password_hash: userDTO.password_hash,
        role: roleName,
        image: userDTO.image,
      });

      const user = await this.userRepository.saveUser(userEntity);

      //Email de confirmacion

      await this.sendEmailValidationLink(user.email);

      // if (!data.success) throw new Error(data.message);

      const token = await JwtAdapter.generateToken({
        id: user.id,
      });

      if (!token) throw CustomError.internalServer("Error while creating JWT");

      const { password_hash, ...userEntityWithoundPassword } = user;

      return {
        user: userEntityWithoundPassword,
        token,
      };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error saving user");
    }
  };

  resendEmailValidationLink = async (email: string) => {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) throw CustomError.notFound("Usuario no encontrado");
    if (user.emailValidated)
      throw CustomError.badRequest("El correo ya está validado");

    return await this.sendEmailValidationLink(email);
  };

  sendEmailValidationLink = async (email: string): Promise<boolean> => {
    const token = await JwtAdapter.generateToken({ email }, "1m");
    if (!token) throw CustomError.internalServer("Error getting token");

    const link = `${envs.WEBSERVICE_URL}/api/auth/validate-email/${token}`;

    const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #333;">👋 ¡Bienvenido(a)!</h2>
    <p style="font-size: 16px; color: #555;">
      Gracias por registrarte en NOTIC-ZEN. Antes de comenzar, por favor verifica tu correo electrónico haciendo clic en el siguiente botón:
    </p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${link}" style="background-color: #1976d2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
        Validar correo
      </a>
    </div>
    <p style="font-size: 14px; color: #888;">
      Si no puedes hacer clic en el botón, copia y pega el siguiente enlace en tu navegador:
    </p>
    <p style="font-size: 14px; color: #1976d2; word-break: break-all;">
      ${link}
    </p>
    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
    <p style="font-size: 12px; color: #aaa; text-align: center;">
      Este correo fue enviado automáticamente, por favor no respondas a este mensaje.
    </p>
  </div>
`;
    const options = {
      to: email,
      subject: "Validate your email :)",
      htmlBody: html,
    };

    const isSent = await this.emailService.sendEmail(options);
    if (!isSent) throw CustomError.internalServer("Error sending email");

    return true;
  };

  //LO QUE ENVIA EL USUARIO DESDE SU CORREO
  validateEmailtoLogin = async (token: string) => {
    try {
      const payload = await JwtAdapter.validateToken<{ email: string }>(token);
      if (!payload) throw CustomError.unauthorized("Invalid token");

      const { email } = payload as { email: string };

      if (!email) throw CustomError.internalServer("Email not in token");

      const user = await this.userRepository.findUserByEmail(email);
      if (!user) throw CustomError.internalServer("Email not exists");

      user.emailValidated = true;

      await this.userRepository.updateUser(user.id, user);

      return true;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error validating");
    }
  };

  loginUser = async (dto: LoginUserDto) => {
    try {
      const user = await this.userRepository.findUserByEmail(dto.email);

      if (!user)
        throw CustomError.notFound(`User not found by email: ${dto.email}`);

      const isMatch = BycripAdapter.compare(
        dto.password_hash,
        user.password_hash
      );

      if (!isMatch) throw CustomError.badRequest("Incorrect Password");

      if (!user.emailValidated) {
        throw CustomError.unauthorized(
          "Debes verificar tu correo electrónico antes de iniciar sesión."
        );
      }

      const token = await JwtAdapter.generateToken({ id: user.id });
      if (!token) throw CustomError.internalServer("Error while creating JWT");

      const { password_hash, ...userEntity } = user;

      return {
        userEntity,
        token,
      };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching users");
    }
  };

  getUsers = async (page: number, limit: number): Promise<UserEntity[]> => {
    try {
      const users = await this.userRepository.getUsers(page, limit);

      return users ?? [];
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.internalServer("Error fetching users");
    }
  };

  countUsers = async (): Promise<number> => {
    try {
      const count = await this.userRepository.countUsers();
      return count;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching users");
    }
  };

  getUserById = async (id: string): Promise<Partial<UserEntity>> => {
    try {
      const user = await this.userRepository.findUserById(id);

      if (!user) throw CustomError.notFound(`User not found by id: ${id}`);

      const { password_hash, ...userEntity } = user;

      return userEntity ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching user");
    }
  };

  getUserByEmail = async (email: string): Promise<Partial<UserEntity>> => {
    try {
      const user = await this.userRepository.findUserByEmail(email);

      if (!user)
        throw CustomError.notFound(`User not found by email: ${email}`);

      const { password_hash, ...userEntity } = user;

      return userEntity ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching user");
    }
  };

  updateUserById = async (
    id: string,
    dto: Partial<UserEntity>
  ): Promise<UserEntity> => {
    try {
      if (!Uuid.isUUID(id) || !id) {
        throw CustomError.badRequest("Invalid or missing user ID");
      }
      //Regla de negocio en la entidad
      if (dto.email && !dto.email.endsWith("@gmail.com")) {
        // return [new Error("Only Gmail addresses are allowed."), null];
        throw CustomError.badRequest("Only Gmail addresses are allowed.");
      }

      if (dto.password_hash && dto.password_hash.length <= 3) {
        throw CustomError.badRequest(
          "The password must be more than 3 characteres"
        );
      }

      dto.password_hash =
        dto.password_hash && BycripAdapter.hash(dto.password_hash);

      const updatedUser = await this.userRepository.updateUser(id, dto);

      if (!updatedUser)
        throw CustomError.notFound(`User not found by id: ${id}`);

      return updatedUser ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching users");
    }
  };

  deleteUserById = async (id: string): Promise<void> => {
    try {
      await this.userRepository.deleteUser(id);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching users");
    }
  };

  updateRoleByUserId = async (id: string, newRoleId: number): Promise<void> => {
    try {
      await this.userRepository.updateRoleByUserId(id, newRoleId);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error fetching users");
    }
  };

  generateTokenService = async (userId: string) => {
    try {
      const token = await JwtAdapter.generateToken({
        id: userId,
      });

      if (!token) throw CustomError.internalServer("Error while creating JWT");

      console.log("GENERANDO TOKEN");
      return token;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error generating token");
    }
  };

  getTotals = async () => {
    try {
      const documents = await this.userRepository.getTotals();

      return documents;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error generating token");
    }
  };
}
