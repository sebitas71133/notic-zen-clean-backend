import { v4 as uuidv4, validate as isUUID } from "uuid";

export class Uuid {
  public static v4() {
    return uuidv4();
  }

  public static isUUID(id: string) {
    return isUUID(id);
  }
}
