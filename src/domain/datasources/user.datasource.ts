import { UserEntity } from "../entities/user.entitie";

export abstract class UserDataSource {
  abstract saveUser(user: UserEntity): Promise<UserEntity>;

  abstract getUsers(page: number, limit: number): Promise<UserEntity[]>;

  abstract countUsers(): Promise<number>;

  abstract findUserById(id: string): Promise<UserEntity | null>;

  abstract findUserByEmail(email: string): Promise<UserEntity | null>;

  abstract updateUser(
    id: string,
    updates: Partial<UserEntity>
  ): Promise<UserEntity | null>;

  abstract deleteUser(id: string): Promise<void>;
}
