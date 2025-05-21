import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";
import { NoteImageEntity } from "../../../domain/entities/image.entitie";
import { TagEntity } from "../../../domain/entities/tagEntity";
import { CreateTagDto } from "../tags/create-tag.dto";
import { CreateImageDto } from "../image/create-image.dto";

interface objectDTO {
  title: string;
  content?: string;
  categoryId: string;
  isPinned?: boolean;
  images?: CreateImageDto[];
  tags?: CreateTagDto[];
}

const schema = z.object({
  title: z
    .string({ required_error: "Missing Title" })
    .min(3, "The title must be at least 3 characters long"),
  content: z.string().optional(),
  categoryId: z
    .string({ required_error: "Category id required" })
    .uuid("Invalid categoryId format (must be UUID)"),
  isPinned: z.boolean().optional(),
  images: z
    .array(
      z.object({
        url: z
          .string({ required_error: "image url is required" })
          .url("Invalid image URL"),
        altText: z.string().optional(),
      })
    )
    .max(3, "You can upload up to 3 images")
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
    public isPinned?: boolean,
    public images?: Partial<CreateImageDto[]>,
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
      images = [],
      tags = [], // ahora son los IDs
    } = result.data;

    const imageDTOs = images.map((img) =>
      CreateImageDto.create({
        url: img.url,
        altText: img.altText,
      })
    );

    return new SaveNoteDTO(
      title,
      categoryId,
      content,
      isPinned,
      imageDTOs,
      tags // ahora son solo strings (tagIds)
    );
  }
}
