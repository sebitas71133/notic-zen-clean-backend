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
  isArchived?: boolean;
  isPinned?: boolean;
  images?: CreateImageDto[];
  tags?: CreateTagDto[];
}

const schema = z.object({
  title: z
    .string({ required_error: "Missing Title" })
    .min(3, "The title must be at least 3 characters long"),
  content: z.string().optional(),
  categoryId: z.string().uuid("Invalid categoryId format (must be UUID)"),
  isPinned: z.boolean().optional(),
  isArchived: z.boolean().optional(),
  images: z
    .array(
      z.object({
        url: z.string().url("Invalid image URL"),
        altText: z.string().optional(),
      })
    )
    .max(10, "You can upload up to 10 images")
    .optional(),
  tags: z
    .array(z.string().uuid("Invalid tag ID format"))
    .max(3, "You can only add up to 3 tags")
    .optional(),
});

export class CreateNoteDTO {
  private constructor(
    public title: string,
    public categoryId: string,
    public content?: string,
    public isPinned?: boolean,
    public isArchived?: boolean,
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
      isPinned,
      isArchived,
      images = [],
      tags = [],
    } = result.data;

    // const imageDTOs = images.map((img) =>
    //   CreateImageDto.create({
    //     url: img.url,
    //     altText: img.altText,
    //   })
    // );

    // const tagDTOs = tags.map(
    //   (tag) => CreateTagDto.create({ name: tag.name }) // rellena lo necesario
    // );

    const noteDTO = new CreateNoteDTO(
      title,
      categoryId,
      content,
      isPinned,
      isArchived,
      images,
      tags
    );

    return noteDTO;
  }
}
