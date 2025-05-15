import { RoleDataSource } from "../../domain/datasources/role.datasource";
import { RoleEntity } from "../../domain/entities/role.entitie";
import { RoleName } from "../../domain/enums/role.enum";
import { RoleRepository } from "../../domain/repository/role.repository";

export class RoleRepositoryImpl implements RoleRepository {
  constructor(private readonly roleDataSource: RoleDataSource) {}

  getRoleByName(roleName: RoleName): Promise<RoleEntity> {
    return this.roleDataSource.getRoleByName(roleName);
  }

  getRoleById(id: string): Promise<RoleEntity> {
    return this.roleDataSource.getRoleById(id);
  }
}
