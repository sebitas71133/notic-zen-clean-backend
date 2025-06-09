import { z } from "zod";

export const CreateSubNoteSchema = z.object({
  title: z
    .string({ required_error: "Missing title" })
    .min(3, "Title must be at least 3 characters")
    .max(100),
  description: z.string().max(500).optional(),
  noteId: z.string().uuid("Invalid noteId format"),
  tags: z.array(z.string().uuid()).max(5).optional(),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        altText: z.string().optional(),
        publicId: z.string().optional().nullable(),
      })
    )
    .max(10)
    .optional(),
});

export type CreateSubNoteDTO = z.infer<typeof CreateSubNoteSchema>;
