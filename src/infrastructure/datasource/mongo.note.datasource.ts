import fs from "fs";
import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entitie";

export class MongoNoteDataSource implements UserDataSource {
  private readonly userPath = "users/";

  constructor() {
    this.createUserFiles();
  }
  getUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }

  private createUserFiles() {
    if (!fs.existsSync(this.userPath)) {
      fs.mkdirSync(this.userPath); //crear carpeta
    }
  }

  public async saveUser(user: UserEntity): Promise<UserEntity> {
    const success = Math.random() > 0.5;

    // if (success) {
    //   return Promise.resolve({
    //     user: user,
    //     token: "fake-jwt-token",
    //   });
    // } else {
    //   return Promise.reject(new Error("Simulated random failure"));
    // }

    throw new Error("Falta");
  }
}
