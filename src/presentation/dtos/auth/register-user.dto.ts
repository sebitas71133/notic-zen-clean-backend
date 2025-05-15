import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  name: string;
  email: string;
  password: string;
  image?: string; //image?: string;
}

const schema = z.object({
  name: z.string({ required_error: "Missing Name" }),
  email: z.string({ required_error: "Missing Email" }).email("Invalid Email"),
  password: z.string({ required_error: "Missing Password" }),
  image: z.string().optional(),
});

export class AuthRegisterRequestDTO {
  private constructor(
    public name: string,
    public email: string,
    public password_hash: string,
    public image?: string
  ) {}

  static createDTO(object: objectDTO): AuthRegisterRequestDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { name, email, password, image } = result.data;

    const userDTO = new AuthRegisterRequestDTO(name, email, password, image);

    return userDTO;
  }
}
