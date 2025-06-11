import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { SettingService } from "../services/setting.service";

export class AdminController {
  constructor(private readonly settingService: SettingService) {}

  private handleError = (error: any, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  public getConfig = async (req: Request, res: Response) => {
    try {
      const moderateImage = await this.settingService.getValue("moderateImage");
      const sendEmail = await this.settingService.getValue("sendEmail");

      return res.status(200).json({
        moderateImage: moderateImage === "true",
        sendEmail: sendEmail === "true",
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public toggleModeration = async (req: Request, res: Response) => {
    try {
      const current = await this.settingService.getValue("moderateImage");
      const newValue = current !== "true";
      await this.settingService.updateValue("moderateImage", String(newValue));

      return res.status(200).json({
        success: true,
        message: `Valor en ${newValue}`,
        moderateImage: newValue,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  public toggleSendEmail = async (req: Request, res: Response) => {
    try {
      const current = await this.settingService.getValue("sendEmail");
      const newValue = current !== "true";
      await this.settingService.updateValue("sendEmail", String(newValue));

      return res.status(200).json({
        success: true,
        message: `Valor en ${newValue}`,
        sendEmail: newValue,
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
