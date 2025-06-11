import { SettingDataSource } from "../../domain/datasources/setting.datasource";
import { SettingRepository } from "../../domain/repository/setting.repository";

export class SettingRepositoryImpl implements SettingRepository {
  constructor(private readonly settingDataSource: SettingDataSource) {}

  getValue(key: string): Promise<string | null> {
    return this.settingDataSource.getValue(key);
  }
  updateValue(key: string, value: string): Promise<void> {
    return this.settingDataSource.updateValue(key, value);
  }
}
