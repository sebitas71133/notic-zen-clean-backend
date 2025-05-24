import { pgPool } from "../../../data/postgresql/init";
import { UserDataSource } from "../../../domain/datasources/user.datasource";
import { RoleEntity } from "../../../domain/entities/role.entitie";
import { UserEntity } from "../../../domain/entities/user.entitie";
import { CustomError } from "../../../domain/errors/custom.error";
import { PrismaClient } from "../../../generated/prisma";
import { RoleRepositoryImpl } from "../../repository/role.repository.impl";

const prismaClient = new PrismaClient();
export class PostgresUserDataSourceImpl implements UserDataSource {
  constructor(private readonly roleRepository: RoleRepositoryImpl) {}
  // public async saveUser(user: UserEntity): Promise<UserEntity> {
  //   try {
  //     const { id, email, emailValidated, image, name, password_hash, role } =
  //       user;
  //     await pgPool.query(
  //       `INSERT INTO users (id,name,email,password_hash,role_id,emailValidated,image) VALUES($1,$2,$3,$4,$5,$6,$7) `,
  //       [id, name, email, password_hash, role.id, emailValidated, image]
  //     );

  //     return UserEntity.fromObject({ ...user });
  //   } catch (error: any) {
  //     throw CustomError.badRequest(error.detail);
  //   }
  // }

  public async saveUser(user: UserEntity): Promise<UserEntity> {
    try {
      const { id, email, emailValidated, image, name, password_hash, role } =
        user;
      console.log(user);
      await prismaClient.user.create({
        data: {
          id,
          name,
          email,
          password_hash,
          emailValidated,
          image,
          role: role?.id
            ? {
                connect: { id: role.id },
              }
            : undefined,
        },
      });
      return UserEntity.fromObject({ ...user });
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(
        error?.message ?? "Error al guardar usuario"
      );
    }
  }
  public async getUsers(page: number, limit: number): Promise<UserEntity[]> {
    try {
      const skip = (page - 1) * limit;

      const users = await prismaClient.user.findMany({
        skip,
        take: limit,
        orderBy: {
          name: "asc",
        },
      });

      const data = users.map((user) => UserEntity.fromObject({ ...user }));

      return data;
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail);
    }
  }
  public async countUsers(): Promise<number> {
    try {
      const count = await prismaClient.user.count();
      return count;
    } catch (error: any) {
      console.log(error);
      throw CustomError.badRequest(error.detail ?? "Error al contar usuarios");
    }
  }
  // public async findUserById(id: string): Promise<UserEntity | null> {
  //   try {
  //     const result = await pgPool.query("SELECT * FROM users WHERE id = $1", [
  //       id,
  //     ]);

  //     const row = result.rows[0];
  //     if (!row)
  //       throw CustomError.notFound(`No user file found with id : ${id}`);

  //     const role = await this.roleRepository.getRoleById(row.role_id);
  //     if (!role) throw CustomError.notFound("Role not found");

  //     return UserEntity.fromObject({
  //       ...row,
  //       role,
  //     });
  //   } catch (error: any) {
  //     throw error;
  //   }
  // }
  public async findUserById(id: string): Promise<UserEntity | null> {
    try {
      const user = await prismaClient.user.findUnique({
        where: { id },
        include: {
          role: true, // Incluye la relación con el rol
        },
      });

      if (!user) {
        throw CustomError.notFound(`No user file found with id : ${id}`);
      }

      return UserEntity.fromObject({
        id: user.id,
        name: user.name,
        email: user.email,
        password_hash: user.password_hash,
        emailValidated: user.emailValidated,
        image: user.image,
        role: user.role ? RoleEntity.fromObject(user.role) : undefined,
      });
    } catch (error: any) {
      throw error;
    }
  }

  // public async findUserByEmail(email: string): Promise<UserEntity | null> {
  //   try {
  //     const result = await pgPool.query(
  //       "SELECT * FROM users WHERE email = $1",
  //       [email]
  //     );

  //     const row = result.rows[0];
  //     if (!row)
  //       throw CustomError.notFound(`No user file found with email : ${email}`);

  //     const role = await this.roleRepository.getRoleById(row.role_id);
  //     if (!role) throw CustomError.notFound("Role not found");

  //     return UserEntity.fromObject({
  //       ...row,
  //       role,
  //     });
  //   } catch (error: any) {
  //     throw error;
  //   }
  // }

  public async findUserByEmail(email: string): Promise<UserEntity | null> {
    try {
      const user = await prismaClient.user.findUnique({
        where: { email },
        include: {
          role: true, // Incluye el rol relacionado
        },
      });

      if (!user) {
        throw CustomError.notFound(`No user file found with email : ${email}`);
      }

      return UserEntity.fromObject({
        ...user,
        role: user.role ? RoleEntity.fromObject(user.role) : undefined,
      });
    } catch (error: any) {
      throw error;
    }
  }

  public async existUserByEmail(email: string): Promise<boolean> {
    try {
      const user = await prismaClient.user.findUnique({
        where: { email },
      });

      return user !== null;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateUser(
    id: string,
    updates: Partial<UserEntity>
  ): Promise<UserEntity | null> {
    try {
      const { role, ...rest } = updates;

      const updatedUser = await prismaClient.user.update({
        where: { id },
        data: {
          ...rest,
          role: role?.id
            ? {
                connect: { id: role.id },
              }
            : undefined,
        },
        include: {
          role: true, // Para devolver el rol actualizado también
        },
      });

      const userEntity = UserEntity.fromObject({
        ...updatedUser,
        role: updatedUser.role
          ? RoleEntity.fromObject(updatedUser.role)
          : undefined,
      });

      return userEntity ?? null;
    } catch (error: any) {
      if (error.code === "P2025") {
        throw CustomError.notFound(`Usuario con id ${id} no encontrado`);
      }
      throw CustomError.badRequest(
        error.message || "Error al actualizar el usuario"
      );
    }
  }
  public async deleteUser(userId: string): Promise<void> {
    try {
      await prismaClient.user.delete({
        where: { id: userId },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        // Prisma lanza este código si no encuentra el registro
        throw CustomError.notFound(`Usuario con id ${userId} no encontrado`);
      }
      throw CustomError.badRequest(
        error.message || "Error al eliminar usuario"
      );
    }
  }
}
