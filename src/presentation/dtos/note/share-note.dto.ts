import { z } from "zod";

export const ShareNoteSchema = z.object({
  email: z
    .string({ required_error: "Missing email" })
    .email("Invalid email format"),
  role: z.enum(["VIEWER", "EDITOR"], {
    required_error: "Role is required",
    invalid_type_error: "Invalid role",
  }),
  //   userId: z.string().uuid("Invalid userId format (must be UUID)"),
});

export type ShareNoteDTO = z.infer<typeof ShareNoteSchema>;
