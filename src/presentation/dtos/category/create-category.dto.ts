import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  name: string;

  color?: string; //image?: string;
}

const CreateCategorySchema = z.object({
  name: z.string({ required_error: "Missing name color" }),
  color: z.string().optional(),
});

export class CreateCategoryDto {
  private constructor(public name: string, public color?: string) {}

  static create(object: objectDTO): CreateCategoryDto {
    const result = CreateCategorySchema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { name, color } = result.data;
    return new CreateCategoryDto(name, color);
  }
}
