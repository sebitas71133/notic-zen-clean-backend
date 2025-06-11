export abstract class SettingDataSource {
  abstract getValue(key: string): Promise<string | null>;

  abstract updateValue(key: string, value: string): Promise<void>;
}
