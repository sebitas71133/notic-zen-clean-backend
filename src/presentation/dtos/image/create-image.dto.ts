import { z } from "zod";
import { CustomError } from "../../../domain/errors/custom.error";

interface objectDTO {
  url: string;
  altText?: string;
}

const CreateImagechema = z.object({
  url: z.string().url("Invalid image URL"),
  altText: z.string().optional(),
});

export class CreateImageDto {
  private constructor(public url: string, public altText?: string) {}

  static create(object: objectDTO): CreateImageDto {
    const result = CreateImagechema.safeParse(object);
    if (!result.success) {
      const message = result.error.errors[0].message;

      throw CustomError.badRequest(message);
    }

    const { url, altText } = result.data;
    return new CreateImageDto(url, altText);
  }
}
