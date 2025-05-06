import fs from "fs";
import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entitie";
import { CustomError } from "../../domain/errors/custom.error";

export class FileNoteDataSource implements UserDataSource {
  private readonly filePath = "fileUsers/";
  private readonly usersPath = "fileUsers/users.json";

  constructor() {
    this.createUserFiles();
  }

  public async findUserById(id: string): Promise<UserEntity | null> {
    let users: UserEntity[] = [];

    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    users = JSON.parse(fileData);

    //Buscar usuario
    const user = users.find((e) => e.id === id);

    return user ?? null;
  }

  public async findUserByEmail(email: string): Promise<UserEntity | null> {
    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    const users: UserEntity[] = JSON.parse(fileData);

    //Buscar usuario
    const user = users.find((e) => e.email === email);

    return user ?? null;
  }

  public async updateUser(
    id: string,
    updates: Partial<UserEntity>
  ): Promise<UserEntity | null> {
    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    const users: UserEntity[] = JSON.parse(fileData);

    let updatedUser: UserEntity | null = null;

    // Limpia los undefined
    const cleanUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== undefined)
    );

    //Buscar usuario
    const newUsers = users.map((user) => {
      if (user.id === id) {
        updatedUser = { ...user, ...cleanUpdates };
        return updatedUser;
      }
      return user;
    });

    fs.writeFileSync(this.usersPath, JSON.stringify(newUsers, null, 2));

    return updatedUser ?? null;
  }

  public async deleteUser(id: string): Promise<void> {
    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    const users: UserEntity[] = JSON.parse(fileData);

    const userExists = users.some((e) => e.id === id);
    if (!userExists) throw CustomError.notFound(`User not found with id ${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);

    fs.writeFileSync(this.usersPath, JSON.stringify(updatedUsers, null, 2));
  }

  public async getUsers(page: number, limit: number): Promise<UserEntity[]> {
    let users: UserEntity[] = [];

    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    users = JSON.parse(fileData);

    const offset = (page - 1) * limit;

    const paginateUsers = users.slice(offset, offset + limit);

    return paginateUsers;
  }

  public async countUsers(): Promise<number> {
    let users: UserEntity[] = [];

    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    users = JSON.parse(fileData);

    return users.length;
  }

  private createUserFiles() {
    //Existe carpeta?
    if (!fs.existsSync(this.filePath)) {
      fs.mkdirSync(this.filePath); //crear carpeta
    }

    // Existe archivo ?
    if (fs.existsSync(this.usersPath)) return;

    // Crear archivo
    fs.writeFileSync(this.usersPath, "[]");
  }

  private existsEmail(users: UserEntity[] = [], email: string): boolean {
    return users.some((e) => e.email === email);
  }

  public async saveUser(user: UserEntity): Promise<UserEntity> {
    if (!fs.existsSync(this.usersPath)) {
      throw CustomError.notFound(`No users file found.`);
    }

    const fileData = fs.readFileSync(this.usersPath, "utf-8");
    const users: UserEntity[] = JSON.parse(fileData);

    //Verificar existencia de email

    if (this.existsEmail(users, user.email)) {
      throw CustomError.badRequest("The email is already registered");
    }

    //Agregar nuevo usuario
    users.push(user);

    //Guardar el archivo con el usuario incluido
    fs.writeFileSync(this.usersPath, JSON.stringify(users, null, 2));

    return user;
  }
}
