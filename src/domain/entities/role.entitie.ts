import { Uuid } from "../../config/uuid";
import { RoleName } from "../enums/role.enum";

interface params {
  name: RoleName;
  description?: string;
}

export class RoleEntity {
  private constructor(
    public readonly id: number,
    public readonly name: RoleName,
    public readonly description?: string
  ) {}

  static create(params: params) {
    //const id = Uuid.v4();
    const id = generateSecureUniqueNumber();

    return new RoleEntity(id, params.name, params.description);
  }

  static fromObject(props: {
    id: number;
    name: string;
    description?: string | null;
  }): RoleEntity {
    return new RoleEntity(
      props.id,
      props.name as RoleName,
      props.description ?? undefined
    );
  }
}

function generateSecureUniqueNumber(): number {
  const timestamp = Date.now(); // tiempo en milisegundos
  const random = Math.floor(Math.random() * 100000); // 5 dígitos aleatorios
  return parseInt(`${timestamp}${random}`);
}
