import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  page?: number;
  limit?: number;
  categoryId?: string;
  tagId?: string;
  isPinned?: string;
  isArchived?: string;
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
  tagId: z.string().uuid("Invalid category ID").optional(),
  isPinned: z.enum(["true", "false"]).optional(),
  isArchived: z.enum(["true", "false"]).optional(),
  sortDate: z.enum(["asc", "desc"]).optional(),
  sortTitle: z.enum(["asc", "desc"]).optional(),
});

export class PaginationNoteDTO {
  private constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly categoryId?: string,
    public readonly tagId?: string,
    public readonly isPinned?: string,
    public readonly isArchived?: string,
    public readonly sortDate?: string,
    public readonly sortTitle?: string
  ) {}

  static createDTO(object: objectDTO): PaginationNoteDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const {
      page,
      limit,
      categoryId,
      tagId,
      isPinned,
      isArchived,
      sortDate,
      sortTitle,
    } = result.data;

    const tagDTO = new PaginationNoteDTO(
      page,
      limit,
      categoryId,
      tagId,
      isPinned,
      isArchived,
      sortDate,
      sortTitle
    );

    return tagDTO;
  }
}
