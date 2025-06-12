import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

import { CreateTagDto } from "../tags/create-tag.dto";
import { CreateImageDto } from "../image/create-image.dto";

interface objectDTO {
  title: string;
  content?: string;
  categoryId: string;
  isPinned?: string;
  isArchived?: string;
  images?: CreateImageDto[];
  tags?: CreateTagDto[];
}

const schema = z.object({
  title: z
    .string({ required_error: "Missing Title" })
    .min(3, "The title must be at least 3 characters long")
    .max(100),
  content: z.string().max(5000).optional(),
  categoryId: z
    .string({ required_error: "Category id required" })
    .uuid("Invalid categoryId format (must be UUID)"),
  isPinned: z.enum(["true", "false"]).optional(),
  isArchived: z.enum(["true", "false"]).optional(),
  images: z
    .array(
      z.object({
        url: z.string().url("Invalid image URL"),
        altText: z.string().optional(),
        publicId: z.string().optional().nullable(),
      })
    )
    .max(10, "You can upload up to 10 images")
    .optional(),
  tags: z
    .array(z.string().uuid("Invalid tag ID format"))
    .max(3, "You can only add up to 3 tags")
    .optional(),
});

export class SaveNoteDTO {
  private constructor(
    public title: string,
    public categoryId: string,
    public content?: string,
    public isPinned?: string,
    public isArchived?: string,
    public images?: object[],
    public tagIds?: string[]
  ) {}

  static createDTO(object: objectDTO): SaveNoteDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;
      throw CustomError.badRequest(message);
    }

    const {
      title,
      content,
      categoryId,
      isPinned,
      isArchived,
      images = [],
      tags = [], // ahora son los IDs
    } = result.data;

    return new SaveNoteDTO(
      title,
      categoryId,
      content,
      isPinned,
      isArchived,
      images,
      tags // ahora son solo strings (tagIds)
    );
  }
}

function toBoolean(value?: string | boolean): boolean | undefined {
  if (value === "true") return true;
  if (value === "false") return false;
  if (typeof value === "boolean") return value;
  return undefined;
}
