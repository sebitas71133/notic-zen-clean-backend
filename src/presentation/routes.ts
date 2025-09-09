import { Router } from "express";
import { AuthRoutes } from "./routes/auth.routes";
import { CategoryRoutes } from "./routes/category.routes";
import { TagRoutes } from "./routes/tag.route";
import { NoteRoutes } from "./routes/note.routes";
import { AdminRoutes } from "./routes/admin.routes";
import { ShareRoutes } from "./routes/share.route";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);

    router.use("/api/category", CategoryRoutes.routes);

    router.use("/api/tag", TagRoutes.routes);

    router.use("/api/note", NoteRoutes.routes);

    router.use("/api/note", ShareRoutes.routes);

    router.use("/api/admin", AdminRoutes.routes);

    return router;
  }
}
