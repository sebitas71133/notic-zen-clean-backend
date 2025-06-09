import { z } from "zod";

export const PaginationSubNoteSchema = z.object({
  page: z.coerce
    .number({ required_error: "Page must be a number" })
    .min(1, "Page must be at least 1")
    .optional()
    .default(1),
  limit: z.coerce
    .number({ required_error: "Limit must be a number" })
    .min(1, "Limit must be at least 1")
    .optional()
    .default(10),
  noteId: z.string().uuid("Invalid noteId format"),
  tagId: z.string().uuid("Invalid category ID").optional(),
  isPinned: z.enum(["true", "false"]).optional(),
  isArchived: z.enum(["true", "false"]).optional(),
  sortDate: z.enum(["asc", "desc"]).optional(),
  sortTitle: z.enum(["asc", "desc"]).optional(),
});

export type PaginationSubNoteDTO = z.infer<typeof PaginationSubNoteSchema>;
