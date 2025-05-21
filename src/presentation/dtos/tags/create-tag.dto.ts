import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  name: string;
}

const CreateTagSchema = z.object({
  name: z
    .string({ required_error: "Missing name tag" })
    .min(2, "Tag name must be at least 2 characters"),
});

export class CreateTagDto {
  private constructor(public name: string, public color?: string) {}

  static create(object: objectDTO): CreateTagDto {
    const result = CreateTagSchema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { name } = result.data;
    return new CreateTagDto(name);
  }
}
