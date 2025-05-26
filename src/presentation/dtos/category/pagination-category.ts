import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  page?: number;
  limit?: number;

  categoryId?: string;
}

const schema = z.object({
  page: z.coerce
    .number({ required_error: "Page must be a number" })
    .min(1, "Page must be at least 1")
    .optional()
    .default(1),
  limit: z.coerce
    .number({ required_error: "Limit must be a number" })
    .min(1, "Limit must be at least 1")
    .optional()
    .default(10),
  categoryId: z.string().uuid("Invalid category ID").optional(),
});

export class PaginationCategoryDTO {
  private constructor(
    public readonly page: number,
    public readonly limit: number,

    public readonly categoryId?: string
  ) {}

  static createDTO(object: objectDTO): PaginationCategoryDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { page, limit, categoryId } = result.data;

    const categoryDTO = new PaginationCategoryDTO(page, limit, categoryId);

    return categoryDTO;
  }
}
