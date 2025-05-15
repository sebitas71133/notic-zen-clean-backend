import { RoleEntity } from "../entities/role.entitie";
import { RoleName } from "../enums/role.enum";

export abstract class RoleRepository {
  //   abstract saveUser(user: UserEntity): Promise<UserEntity>;

  abstract getRoleByName(roleName: RoleName): Promise<RoleEntity>;

  abstract getRoleById(id: string): Promise<RoleEntity>;

  //   abstract countUsers(): Promise<number>;

  //   abstract findUserById(id: string): Promise<UserEntity | null>;

  //   abstract findUserByEmail(email: string): Promise<UserEntity | null>;

  //   abstract updateUser(
  //     id: string,
  //     updates: Partial<UserEntity>
  //   ): Promise<UserEntity | null>;

  //   abstract deleteUser(id: string): Promise<void>;
}
