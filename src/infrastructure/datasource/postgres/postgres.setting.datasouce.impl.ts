import { SettingDataSource } from "../../../domain/datasources/setting.datasource";

import { PrismaClient } from "../../../generated/prisma";

const prismaClient = new PrismaClient();

export class PostgresSettingDataSourceImpl implements SettingDataSource {
  async getValue(key: string): Promise<string | null> {
    const setting = await prismaClient.setting.findUnique({ where: { key } });

    return setting?.value ?? null;
  }
  async updateValue(key: string, value: string): Promise<void> {
    await prismaClient.setting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }
}
