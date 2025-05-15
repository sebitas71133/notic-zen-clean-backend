import { pgPool } from "../../../data/postgresql/init";
import { UserDataSource } from "../../../domain/datasources/user.datasource";
import { UserEntity } from "../../../domain/entities/user.entitie";
import { CustomError } from "../../../domain/errors/custom.error";
import { RoleRepositoryImpl } from "../../repository/role.repository.impl";

export class PostgresUserDataSourceImpl implements UserDataSource {
  constructor(private readonly roleRepository: RoleRepositoryImpl) {}
  public async saveUser(user: UserEntity): Promise<UserEntity> {
    try {
      const { id, email, emailvalidated, image, name, password_hash, role } =
        user;
      await pgPool.query(
        `INSERT INTO users (id,name,email,password_hash,role_id,emailvalidated,image) VALUES($1,$2,$3,$4,$5,$6,$7) `,
        [id, name, email, password_hash, role.id, emailvalidated, image]
      );

      return UserEntity.fromObject({ ...user });
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }
  public async getUsers(page: number, limit: number): Promise<UserEntity[]> {
    try {
      const offset = (page - 1) * limit;
      console.log(offset);
      const result = await pgPool.query(
        "SELECT * FROM get_users_paginated($1, $2)",
        [limit, offset]
      );

      const users = result.rows;

      return users;
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }
  public async countUsers(): Promise<number> {
    try {
      const result = await pgPool.query("SELECT COUNT(*) FROM users");

      return Number(result.rows[0].count);
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }
  public async findUserById(id: string): Promise<UserEntity | null> {
    try {
      const result = await pgPool.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);

      const row = result.rows[0];
      if (!row)
        throw CustomError.notFound(`No user file found with id : ${id}`);

      const role = await this.roleRepository.getRoleById(row.role_id);
      if (!role) throw CustomError.notFound("Role not found");

      return UserEntity.fromObject({
        ...row,
        role,
      });
    } catch (error: any) {
      throw error;
    }
  }
  public async findUserByEmail(email: string): Promise<UserEntity | null> {
    try {
      const result = await pgPool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      const row = result.rows[0];
      if (!row)
        throw CustomError.notFound(`No user file found with email : ${email}`);

      const role = await this.roleRepository.getRoleById(row.role_id);
      if (!role) throw CustomError.notFound("Role not found");

      return UserEntity.fromObject({
        ...row,
        role,
      });
    } catch (error: any) {
      throw error;
    }
  }
  public async updateUser(
    id: string,
    updates: Partial<UserEntity>
  ): Promise<UserEntity | null> {
    try {
      const fields: string[] = [];
      const values: any[] = [];
      let i = 1;

      for (const [key, value] of Object.entries(updates)) {
        if (value !== undefined) {
          fields.push(`${key} = $${i}`);
          values.push(value);
          i++;
        }
      }

      if (fields.length === 0)
        throw CustomError.notFound("No hay campos a actualizar"); // No hay campos a actualizar

      values.push(id);
      const query = `UPDATE users SET ${fields.join(", ")} WHERE id = $${i} `;
      await pgPool.query(query, values);

      const userEntity = UserEntity.fromObject(updates as UserEntity);

      return userEntity ?? null;
    } catch (error: any) {
      throw error;
      //  throw CustomError.badRequest(error.detail);
    }
  }
  public async deleteUser(id: string): Promise<void> {
    try {
      const query = `DELETE FROM users  WHERE id = $1 `;
      await pgPool.query(query, [id]);
    } catch (error: any) {
      throw CustomError.badRequest(error.detail);
    }
  }
}
