import { z } from "zod";

export const SaveSubNoteSchema = z.object({
  title: z
    .string({ required_error: "Missing title dto" })
    .min(3, "Title must be at least 3 characters")
    .max(100),
  description: z.string().max(5000).optional(),
  noteId: z.string().uuid("Invalid noteId format"),
  subNoteId: z.string().uuid("Invalid subNoteId format"),
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

export type SaveSubNoteDTO = z.infer<typeof SaveSubNoteSchema>;
