import { SocketService } from "./application/services/socket.service";
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  await server.start();

  // Iniciar socket.io con el http.Server
  SocketService.init({ server: server.httpServer });
}
