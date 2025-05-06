import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

const LoginUserSchema = z.object({
  email: z.string({ required_error: "Missing Email" }).email("Invalid Email"),
  password: z.string({ required_error: "Missing Password" }),
});

export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): LoginUserDto {
    const result = LoginUserSchema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { email, password } = result.data;
    return new LoginUserDto(email, password);
  }
}
