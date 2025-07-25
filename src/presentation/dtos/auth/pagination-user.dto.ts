import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  page?: number;
  limit?: number;
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
    .default(50),
});

export class PaginationUserDTO {
  private constructor(
    public readonly page: number,
    public readonly limit: number
  ) {}

  static createDTO(object: objectDTO): PaginationUserDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { page, limit } = result.data;

    const userDTO = new PaginationUserDTO(page, limit);

    return userDTO;
  }
}
