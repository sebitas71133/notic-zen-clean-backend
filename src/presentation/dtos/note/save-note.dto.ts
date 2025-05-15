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
    .max(10, "You can upload up to 10 images")
    .optional(),
  tags: z
    .array(
      z.object({
        name: z
          .string({ required_error: "tag name is required" })
          .min(2, "Tag name must be at least 2 characters"),
      })
    )
    .max(5, "You can only add up to 5 tags")
    .optional(),
});

export class SaveNoteDTO {
  private constructor(
    public title: string,
    public categoryId: string,
    public content?: string,
    public isPinned?: boolean,
    public images?: CreateImageDto[],
    public tags?: CreateTagDto[]
  ) {}

  static createDTO(object: objectDTO): SaveNoteDTO {
    const result = schema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;
      console.log(message);
      throw CustomError.badRequest(message);
    }

    const {
      title,
      content,
      categoryId,
      isPinned,
      images = [],
      tags = [],
    } = result.data;

    const imageDTOs = images.map((img) =>
      CreateImageDto.create({
        url: img.url,
        altText: img.altText,
      })
    );

    const tagDTOs = tags.map(
      (tag) => CreateTagDto.create({ name: tag.name }) // rellena lo necesario
    );

    const noteDTO = new SaveNoteDTO(
      title,
      categoryId,
      content,
      isPinned,
      imageDTOs,
      tagDTOs
    );

    return noteDTO;
  }
}
