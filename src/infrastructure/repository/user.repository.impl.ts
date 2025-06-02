import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entitie";
import { UserRepository } from "../../domain/repository/user.repository";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}
  findUserById(id: string): Promise<UserEntity | null> {
    return this.userDataSource.findUserById(id);
  }
  findUserByEmail(email: string): Promise<UserEntity | null> {
    return this.userDataSource.findUserByEmail(email);
  }
  updateUser(
    id: string,
    updates: Partial<UserEntity>
  ): Promise<UserEntity | null> {
    return this.userDataSource.updateUser(id, updates);
  }
  deleteUser(id: string): Promise<void> {
    return this.userDataSource.deleteUser(id);
  }
  getUsers(page: number, limit: number): Promise<UserEntity[]> {
    return this.userDataSource.getUsers(page, limit);
  }

  countUsers(): Promise<number> {
    return this.userDataSource.countUsers();
  }

  saveUser(user: UserEntity): Promise<UserEntity> {
    return this.userDataSource.saveUser(user);
  }

  existUserByEmail(email: string): Promise<boolean> {
    return this.userDataSource.existUserByEmail(email);
  }

  updateRoleByUserId(userId: string, newRoleId: number): Promise<void> {
    return this.userDataSource.updateRoleByUserId(userId, newRoleId);
  }

  getTotals(): Promise<any> {
    return this.userDataSource.getTotals();
  }
}
