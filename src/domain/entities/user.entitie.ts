import { BycripAdapter } from "../../config/bcrypt.adapter";
import { Uuid } from "../../config/uuid";
import { CustomError } from "../errors/custom.error";

interface params {
  name: string;
  email: string;
  password: string;
  emailValidated?: boolean;
  img?: string;
}

export class UserEntity {
  private constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public emailValidated: boolean,
    public img?: string
  ) {}

  static create(params: params): UserEntity {
    const id = Uuid.v4();

    //Regla de negocio en la entidad
    if (!params.email.endsWith("@gmail.com")) {
      // return [new Error("Only Gmail addresses are allowed."), null];
      throw CustomError.badRequest("Only Gmail addresses are allowed.");
    }

    if (params.password.length <= 3) {
      throw CustomError.badRequest(
        "The password must be more than 3 characteres"
      );
    }

    const password = BycripAdapter.hash(params.password);

    const user = new UserEntity(
      id,
      params.name,
      params.email,
      password,
      params.emailValidated ?? false,
      params.img ??
        "https://play-lh.googleusercontent.com/ZYKTGrS5CresqrZJb-ewGyIHY2bA6dOKrTJqMAb6n4HXVQY4S9tOfhg0aiY8JH5zxg"
    );

    return user;
  }
}
