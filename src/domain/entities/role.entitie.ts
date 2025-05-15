import { Uuid } from "../../config/uuid";
import { RoleName } from "../enums/role.enum";

interface params {
  name: RoleName;
  description?: string;
}

export class RoleEntity {
  private constructor(
    public readonly id: string,
    public readonly name: RoleName,
    public readonly description?: string
  ) {}

  static create(params: params) {
    const id = Uuid.v4();

    return new RoleEntity(id, params.name, params.description);
  }

  static fromObject(props: {
    id: string;
    name: string;
    description?: string;
  }): RoleEntity {
    return new RoleEntity(props.id, props.name as RoleName, props.description);
  }

  isAdmin(): boolean {
    return this.name.toLowerCase() === "admin";
  }

  isEditor(): boolean {
    return this.name.toLowerCase() === "editor";
  }

  // Puedes seguir agregando reglas aquí
}

// const user = RoleEntity.create(1, RoleName.ADMIN,"test");

// user.isAdmin
