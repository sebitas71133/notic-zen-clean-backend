import { CustomError } from "../../domain/errors/custom.error";

import { SettingRepository } from "../../domain/repository/setting.repository";
import { ISettingService } from "../../domain/services/setting.service";

export class SettingService implements ISettingService {
  constructor(private readonly settingRepository: SettingRepository) {}

  getValue = async (key: string): Promise<string | null> => {
    try {
      const setting = await this.settingRepository.getValue(key);

      return setting ?? null;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error get value");
    }
  };

  updateValue = async (key: string, value: string): Promise<void> => {
    try {
      await this.settingRepository.updateValue(key, value);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internalServer("Error update value");
    }
  };
}
