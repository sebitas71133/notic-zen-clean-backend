import { BycripAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { Uuid } from "../../config/uuid";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

import { CategoryRepository } from "../../domain/repository/category.repository";

import { CreateCategoryDto } from "../dtos/category/create-category.dto";
import { TagRepository } from "../../domain/repository/tag.repository";
import { TagEntity } from "../../domain/entities/tagEntity";
import { CreateTagDto } from "../dtos/tags/create-tag.dto";
import { SettingRepository } from "../../domain/repository/setting.repository";

export class SettingService {
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
