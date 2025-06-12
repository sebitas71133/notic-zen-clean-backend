import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

import { CreateTagDto } from "../tags/create-tag.dto";
import { CreateImageDto } from "../image/create-image.dto";

interface objectDTO {
  title: string;
  content?: string;
  categoryId: string;
  images?: CreateImageDto[];
  tags?: CreateTagDto[];
}

const schema = z.object({
  title: z
    .string({ required_error: "Missing Title" })
    .min(3, "The title must be at least 3 characters long")
    .max(100),
  content: z.string().max(5000).optional(),
  categoryId: z.string().uuid("Invalid categoryId format (must be UUID)"),

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
    .max(5, "You can only add up to 5 tags")
    .optional(),
});

export class CreateNoteDTO {
  private constructor(
    public title: string,
    public categoryId: string,
    public content?: string,

    public images?: object[],
    public tags?: string[]
  ) {}

  static createDTO(object: objectDTO): CreateNoteDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const {
      title,
      content,
      categoryId,

      images = [],
      tags = [],
    } = result.data;

    const noteDTO = new CreateNoteDTO(
      title,
      categoryId,
      content,

      images,
      tags
    );

    return noteDTO;
  }
}
