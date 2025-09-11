import { z } from "zod";

export const CreateNotificationSchema = z.object({
  //   userId: z.string({
  //     required_error: "userId is required",
  //     invalid_type_error: "userId must be a string (UUID)",
  //   }),
  email: z
    .string({ required_error: "Missing email" })
    .email("Invalid email format"),
  //   senderId: z.string({
  //     required_error: "senderId is required",
  //     invalid_type_error: "senderId must be a string (UUID)",
  //   }),
  type: z.enum(["SHARE_NOTE", "COMMENT", "MENTION", "SYSTEM"], {
    required_error: "Notification type is required",
    invalid_type_error: "Invalid notification type",
  }),
  message: z
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be a string",
    })
    .min(1, "Message cannot be empty"),
  noteId: z.string().uuid().optional(), // opcional, solo si aplica a notas
});

export type CreateNotificationDTO = z.infer<typeof CreateNotificationSchema>;
