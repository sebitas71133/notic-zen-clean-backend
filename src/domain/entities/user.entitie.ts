import { BycripAdapter } from "../../config/bcrypt.adapter";
import { Uuid } from "../../config/uuid";
import { RoleName } from "../enums/role.enum";
import { CustomError } from "../errors/custom.error";
import { RoleEntity } from "./role.entitie";

interface params {
  name: string;
  email: string;
  password_hash: string;
  emailvalidated?: boolean;
  role?: RoleEntity;
  image?: string;
}

export class UserEntity {
  private constructor(
    public id: string,
    public name: string,
    public email: string,
    public password_hash: string,
    public emailvalidated: boolean,
    public readonly role: RoleEntity,
    public image: string
  ) {}

  // params : Cuando estás creando una nueva instancia, aplicando reglas de negocio

  static create(params: params): UserEntity {
    const id = Uuid.v4();

    //Regla de negocio en la entidad
    if (!params.email.endsWith("@gmail.com")) {
      // return [new Error("Only Gmail addresses are allowed."), null];
      throw CustomError.badRequest("Only Gmail addresses are allowed.");
    }

    if (params.password_hash.length <= 3) {
      throw CustomError.badRequest(
        "The password_hash must be more than 3 characteres"
      );
    }

    const password_hash = BycripAdapter.hash(params.password_hash);

    const user = new UserEntity(
      id,
      params.name,
      params.email,
      password_hash,
      params.emailvalidated ?? false,
      params.role!,
      params.image ??
        "https://play-lh.googleusercontent.com/ZYKTGrS5CresqrZJb-ewGyIHY2bA6dOKrTJqMAb6n4HXVQY4S9tOfhg0aiY8JH5zxg"
    );

    return user;
  }

  // props : Cuando estás hidratando o reconstruyendo un objeto desde datos planos (como de una base de datos)

  static fromObject(props: {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    emailvalidated: boolean;
    role: RoleEntity;
    image?: string;
  }): UserEntity {
    const user = new UserEntity(
      props.id,
      props.name,
      props.email,
      props.password_hash,
      props.emailvalidated,
      props.role!,
      props.image!
    );

    return user;
  }
}
