export interface ISettingService {
  getValue(key: string): Promise<string | null>;

  updateValue(key: string, value: string): Promise<void>;
}
