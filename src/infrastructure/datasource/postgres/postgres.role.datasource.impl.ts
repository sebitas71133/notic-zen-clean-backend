import { CustomError } from "../../../domain/errors/custom.error";
import { RoleDataSource } from "../../../domain/datasources/role.datasource";
import { RoleEntity } from "../../../domain/entities/role.entitie";
import { RoleName } from "../../../domain/enums/role.enum";
import { prismaClient } from "../../../data/prisma/init";

export class PostgresRoleDataSourceImpl implements RoleDataSource {
  constructor() {}

  async getRoleByName(roleName: RoleName): Promise<RoleEntity> {
    const role = await prismaClient.role.findUnique({
      where: { name: roleName },
    });

    if (!role) throw CustomError.notFound("Role not found");

    return RoleEntity.fromObject(role);
  }

  async getRoleById(id: string): Promise<RoleEntity> {
    const role = await prismaClient.role.findUnique({
      where: { id: Number(id) },
    });

    if (!role) throw CustomError.notFound("Role not found");

    return RoleEntity.fromObject(role);
  }
}
