import { UserDataSource } from "../../../domain/datasources/user.datasource";

import { CustomError } from "../../../domain/errors/custom.error";
import { RoleDataSource } from "../../../domain/datasources/role.datasource";
import { RoleEntity } from "../../../domain/entities/role.entitie";
import { RoleName } from "../../../domain/enums/role.enum";
import { pgPool } from "../../../data/postgresql/init";

import { PrismaClient } from "../../../generated/prisma";
const prismaClient = new PrismaClient();

export class PostgresRoleDataSourceImpl implements RoleDataSource {
  //   private readonly filePath = "fileUsers/";
  //   private readonly usersPath = "fileUsers/users.json";

  constructor() {
    // this.createUserFiles();
  }
  // async getRoleByName(roleName: RoleName): Promise<RoleEntity> {
  //   const result = await pgPool.query(`SELECT * FROM roles WHERE name = $1`, [
  //     roleName,
  //   ]);
  //   const row = result.rows[0];

  //   if (!row) throw CustomError.notFound("Role not found");

  //   return RoleEntity.fromObject(row);
  // }

  async getRoleByName(roleName: RoleName): Promise<RoleEntity> {
    const role = await prismaClient.role.findUnique({
      where: { name: roleName },
    });

    if (!role) throw CustomError.notFound("Role not found");

    return RoleEntity.fromObject(role);
  }

  // async getRoleById(id: string): Promise<RoleEntity> {
  //   const result = await pgPool.query(`SELECT * FROM roles WHERE id = $1`, [
  //     id,
  //   ]);
  //   const row = result.rows[0];

  //   if (!row) throw CustomError.notFound("Role not found");

  //   return RoleEntity.fromObject(row);
  // }
  async getRoleById(id: string): Promise<RoleEntity> {
    const role = await prismaClient.role.findUnique({
      where: { id: Number(id) },
    });

    if (!role) throw CustomError.notFound("Role not found");

    return RoleEntity.fromObject(role);
  }
}
