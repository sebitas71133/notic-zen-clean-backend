import express, {
  Router,
  RequestHandler,
  Response,
  Request,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cors from "cors";

interface serverOptions {
  port: number;
  routes: Router | RequestHandler;
  public_path?: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router | ((...args: any[]) => any);
  private serverListener: any;

  constructor(options: serverOptions) {
    const { port, routes, public_path = "public" } = options;
    this.port = port;
    this.routes = routes;
    this.publicPath = public_path;
  }

  public async start() {
    this.app.use((req, res, next) => {
      console.log("Request from origin:", req.headers.origin);
      next();
    });
    this.app.use(
      cors({
        origin: [
          "http://localhost:5173",
          "http://localhost:3000",
          "http://192.168.0.8:5173",
        ],
        credentials: true, // si necesitas cookies / headers auth
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
    //* middlewares
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "10mb" }));

    //* Routes
    this.app.use(this.routes);

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    // Manejo de errores globales de body-parser
    this.app.use(
      (
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        if (err instanceof SyntaxError && "body" in err) {
          return res.status(400).json({
            success: false,
            message: "JSON mal formado en el cuerpo de la solicitud",
          });
        }

        next(err);
      }
    );

    //*
    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
