import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  name: string;
  email: string;
  password: string;
  image?: string;
}

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid Email").optional(),
  password: z.string().optional(),
  image: z.string().optional(),
});

export class UpdateUserDTO {
  private constructor(
    public name?: string,
    public email?: string,
    public password?: string,
    public image?: string
  ) {}

  static createDTO(object: Partial<objectDTO>): UpdateUserDTO {
    const result = updateUserSchema.safeParse(object);

    if (!result.success) {
      const message = result.error.errors[0].message;
      throw CustomError.badRequest(message);
    }

    console.log(result.data);
    const { name, email, password, image } = result.data;

    return new UpdateUserDTO(name, email, password, image);
  }
}
