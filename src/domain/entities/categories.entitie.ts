import { Uuid } from "../../config/uuid";

import { CustomError } from "../errors/custom.error";
import { UserEntity } from "./user.entitie";

interface params {
  name: string;
  user: UserEntity;
  color?: string;
}

const colors = ["GREEN", "RED", "YELLOW", "BLUE"];

export class CategoryEntity {
  private constructor(
    public id: string,
    public name: string,
    public color: string,
    public readonly user: UserEntity | null
  ) {}

  // params : Cuando estás creando una nueva instancia, aplicando reglas de negocio

  static create(params: params): CategoryEntity {
    const id = Uuid.v4();

    if (params.name.length < 2) {
      throw CustomError.badRequest(
        "El nombre debe tener al menos 2caracteres."
      );
    }

    const category = new CategoryEntity(
      id,
      capitalizeFirstLetter(params.name),
      params.color ?? "BLUE",
      params.user
    );

    return category;
  }

  static updated(dto: Partial<CategoryEntity>): Partial<CategoryEntity> {
    const colors = ["GREEN", "RED", "YELLOW", "BLUE"];

    if (dto.name && dto.name.length <= 2) {
      throw CustomError.badRequest(
        "The category must be more than 2 characters"
      );
    }

    // if (dto.color && !colors.includes(dto.color)) {
    //   throw CustomError.badRequest(`Colores permitidos: ${colors}`);
    // }

    dto.name = capitalizeFirstLetter(dto.name ?? "");

    return dto;
  }

  // props : Cuando estás hidratando o reconstruyendo un objeto desde datos planos (como de una base de datos)

  static fromObject(props: {
    id: string;
    name: string;
    user: UserEntity | null;
    color: string | null;
    user_id?: null | string;
  }): CategoryEntity {
    // const category = new CategoryEntity(
    //   props.id,
    //   props.name,
    //   props.color ?? "SIN COLOR",
    //   props.user
    // );

    const reCat = {
      id: props.id,
      name: props.name,
      color: props.color,
      user: props.user,
      user_id: props.user_id,
    };

    return reCat as CategoryEntity;
  }
}

function capitalizeFirstLetter(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
