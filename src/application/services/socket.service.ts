// src/services/SocketService.ts
import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import { envs } from "../../config/envs";

interface Options {
  server: HttpServer;
  path?: string;
}

export class SocketService {
  private static _instance: SocketService;
  private io: Server;

  private constructor(options: Options) {
    const { server, path = "/socket.io" } = options;

    this.io = new Server(server, {
      path,
      cors: {
        origin: envs.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
      },
    });

    this.start();
  }

  static init(options: Options) {
    if (this._instance) {
      throw new Error("SocketService is already initialized!");
    }
    this._instance = new SocketService(options);
  }

  static getInstance(): SocketService {
    if (!this._instance) {
      throw new Error("SocketService is not initialized");
    }
    return this._instance;
  }

  private start() {
    this.io.on("connection", (socket: Socket) => {
      console.log("🔌 Cliente conectado:", socket.id);

      //socket es la conexión individual de cada cliente
      // escuchar eventos personalizados de ESE cliente
      socket.on("auth", (userId: string) => {
        socket.join(userId); // el socket se une a la "room" = userId
        console.log(`👤 Usuario ${userId} unido a su room`);
      });

      socket.on("disconnect", () => {
        console.log("❌ Cliente desconectado:", socket.id);
      });
    });
  }

  public emit(event: string, payload: any) {
    this.io.emit(event, payload); // broadcast a todos
  }

  public emitToUser(userId: string, event: string, payload: any) {
    this.io.to(userId).emit(event, payload);
  }
}
