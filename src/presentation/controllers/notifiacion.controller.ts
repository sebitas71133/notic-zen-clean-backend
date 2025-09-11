import { Request, RequestHandler, Response } from "express";
import { prismaClient } from "../../data/prisma/init";
import { CustomError } from "../../domain/errors/custom.error";
import { SocketService } from "../../application/services/socket.service";
import { CreateNotificationSchema } from "../dtos/notification/create-notification";

export class NotificationController {
  constructor() {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  };

  /**
   * Obtener notificaciones del usuario autenticado
   */
  public getMyNotifications: RequestHandler = async (req, res) => {
    try {
      const userId = req.body.user.id;

      const notifications = await prismaClient.notification.findMany({
        where: { userId, isRead: false },
        orderBy: { createdAt: "desc" },
        include: {
          note: {
            include: {
              images: true,
            },
          },
        },
      });

      return res.status(200).json({
        success: true,
        data: notifications,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  /**
   * Crear una notificación (normalmente lo usará backend)
   */
  public createNotification: RequestHandler = async (req, res) => {
    try {
      const senderId = req.body.user.id;
      const { email, type, message, noteId } = CreateNotificationSchema.parse(
        req.body
      );

      const user = await prismaClient.user.findUnique({ where: { email } });
      if (!user) throw CustomError.notFound("User not found");

      const recipient = await prismaClient.user.findUnique({
        where: { email },
      });

      if (!recipient) throw CustomError.notFound("Recipient user not found");

      // Crear notificación
      const notification = await prismaClient.notification.create({
        data: {
          userId: recipient.id,
          senderId,
          type,
          message,
          noteId,
        },
      });

      // Emitir en tiempo real al destinatario
      SocketService.getInstance().emitToUser(recipient.id, "notification:new", {
        id: notification.id,
        type: notification.type,
        message: notification.message,
        senderId: notification.senderId,
        noteId: notification.noteId,
        createdAt: notification.createdAt,
      });

      return res.status(201).json({
        success: true,
        message: "Notification created successfully",
        data: notification,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  /**
   * Marcar como leída una notificación
   */
  public markAsRead: RequestHandler = async (req, res) => {
    try {
      const userId = req.body.user.id;
      const { id } = req.params;

      console.log({ id });

      const notification = await prismaClient.notification.findUnique({
        where: { id },
      });

      if (!notification) throw CustomError.notFound("Notification not found");
      if (notification.userId !== userId)
        throw CustomError.forbidden("Not your notification");

      const updated = await prismaClient.notification.update({
        where: { id },
        data: { isRead: true, readAt: new Date() },
      });

      // Emitir actualización al front
      SocketService.getInstance().emitToUser(userId, "notification:read", {
        id: updated.id,
      });

      return res.status(200).json({
        success: true,
        message: "Notification marked as read",
        data: updated,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  /**
   * Marcar todas como leídas
   */
  public markAllAsRead: RequestHandler = async (req, res) => {
    try {
      const userId = req.body.user.id;

      await prismaClient.notification.updateMany({
        where: { userId, isRead: false },
        data: { isRead: true, readAt: new Date() },
      });

      SocketService.getInstance().emitToUser(userId, "notification:read-all", {
        userId,
      });

      return res.status(200).json({
        success: true,
        message: "All notifications marked as read",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  /**
   * Eliminar una notificación
   */
  public deleteNotification: RequestHandler = async (req, res) => {
    try {
      const userId = req.body.user.id;
      const { id } = req.params;

      const notification = await prismaClient.notification.findUnique({
        where: { id },
      });

      if (!notification) throw CustomError.notFound("Notification not found");
      if (notification.userId !== userId)
        throw CustomError.forbidden("Not your notification");

      await prismaClient.notification.delete({ where: { id } });

      return res.status(200).json({
        success: true,
        message: "Notification deleted successfully",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
