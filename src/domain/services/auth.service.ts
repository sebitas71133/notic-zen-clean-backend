import { LoginUserDto } from "../../presentation/dtos/auth/login-user.dto";
import { AuthRegisterRequestDTO } from "../../presentation/dtos/auth/register-user.dto";
import { CreateCategoryDto } from "../../presentation/dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "../../presentation/dtos/category/update-category.dto";
import { CategoryEntity } from "../entities/categories.entitie";
import { RoleEntity } from "../entities/role.entitie";
import { UserEntity } from "../entities/user.entitie";

export interface IAuthService {
  saveUser(userDTO: AuthRegisterRequestDTO): Promise<{
    user: {
      id: string;
      name: string;
      email: string;
      emailValidated: boolean;
      role?: RoleEntity | undefined;
      image?: string | undefined;
    };
    token: {};
  }>;

  resendEmailValidationLink(email: string): Promise<boolean>;

  sendEmailValidationLink(email: string): Promise<boolean>;

  validateEmailtoLogin(token: string): Promise<boolean>;

  loginUser(dto: LoginUserDto): Promise<{
    userEntity: {
      id: string;
      name: string;
      email: string;
      emailValidated: boolean;
      role?: RoleEntity | undefined;
      image?: string | undefined;
    };
    token: {};
  }>;

  getUsers(page: number, limit: number): Promise<UserEntity[]>;

  countUsers(): Promise<number>;

  getUserById(id: string): Promise<Partial<UserEntity>>;

  getUserByEmail(email: string): Promise<Partial<UserEntity>>;

  updateUserById(id: string, dto: Partial<UserEntity>): Promise<UserEntity>;

  deleteUserById(id: string): Promise<void>;

  updateRoleByUserId(id: string, newRoleId: number): Promise<void>;

  generateTokenService(userId: string): Promise<{}>;

  getTotals(): Promise<any>;
}
