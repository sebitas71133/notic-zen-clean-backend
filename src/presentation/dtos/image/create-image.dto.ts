import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  url: string;
  altText?: string;
  publicId?: string;
}

const CreateImagechema = z.object({
  url: z.string().url("Invalid image URL"),
  altText: z.string().optional(),
  publicId: z.string().optional(),
});

export class CreateImageDto {
  private constructor(
    public url: string,
    public altText?: string,
    public publicId?: string
  ) {}

  static create(object: objectDTO): CreateImageDto {
    const result = CreateImagechema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { url, altText, publicId } = result.data;
    return new CreateImageDto(url, altText, publicId);
  }
}
