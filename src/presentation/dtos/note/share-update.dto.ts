import { z } from "zod";

export const UpdateShareRoleSchema = z.object({
  role: z.enum(["VIEWER", "EDITOR"], {
    required_error: "Role is required",
    invalid_type_error: "Role must be VIEWER or EDITOR",
  }),
});

export type UpdateShareRoleDTO = z.infer<typeof UpdateShareRoleSchema>;
