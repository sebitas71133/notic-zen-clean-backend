import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  name: string;
  color: string;
}

const updateCategorySchema = z.object({
  name: z.string().optional(),
  color: z.string().optional(),
});

export class UpdateCategoryDTO {
  private constructor(public name?: string, public color?: string) {}

  static createDTO(object: objectDTO): UpdateCategoryDTO {
    const result = updateCategorySchema.safeParse(object);

    if (!result.success) {
      const message = result.error.errors[0].message;
      throw CustomError.badRequest(message);
    }

    const { name, color } = result.data;

    return new UpdateCategoryDTO(name?.toLowerCase(), color);
  }
}
