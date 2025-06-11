import { RoleEntity } from "../entities/role.entitie";
import { RoleName } from "../enums/role.enum";

export abstract class RoleRepository {
  abstract getRoleByName(roleName: RoleName): Promise<RoleEntity>;

  abstract getRoleById(id: string): Promise<RoleEntity>;
}
