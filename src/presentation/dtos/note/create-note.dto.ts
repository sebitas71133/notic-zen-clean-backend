import { z } from "zod";

export const CreateNoteSchema = z.object({
  title: z
    .string({ required_error: "Missing Title" })
    .min(3, "The title must be at least 3 characters long")
    .max(100),
  content: z.string().max(5000).optional(),
  categoryId: z.string().uuid("Invalid categoryId format (must be UUID)"),
  userId: z.string().uuid("Invalid userId format (must be UUID)"),
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

export type CreateNoteDTO = z.infer<typeof CreateNoteSchema>;
