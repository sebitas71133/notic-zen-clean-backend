import nodemailer, { Transporter } from "nodemailer";
import { SettingService } from "./setting.service";
import {
  IEmailService,
  SendMailOptions,
} from "../../domain/services/email.service";

// export interface SendMailOptions {
//   to: string | string[];
//   subject: string;
//   htmlBody: string;
//   attachements?: Attachement[];
// }

// export interface Attachement {
//   filename: string;
//   path: string;
// }

export class EmailService implements IEmailService {
  private transporter: Transporter;

  constructor(
    mailService: string,
    mailerEmail: string,
    senderEmailPassowrd: string,
    private readonly settingService: SettingService
  ) {
    this.transporter = nodemailer.createTransport({
      service: mailService,
      auth: {
        user: mailerEmail,
        pass: senderEmailPassowrd,
      },
    });
  }

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachements = [] } = options;

    const shouldSendEmail =
      (await this.settingService.getValue("sendEmail")) === "true";

    try {
      if (!shouldSendEmail) return true;
      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
