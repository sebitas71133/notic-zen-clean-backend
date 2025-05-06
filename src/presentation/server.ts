import express, {
  Router,
  RequestHandler,
  Response,
  Request,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import path from "path";

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
    //* middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    //* Routes
    this.app.use(this.routes);

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    // this.app.get("*", (req, res) => {
    //   const indexPath = path.join(
    //     __dirname + `../../../${this.publicPath}/index.html`
    //   );
    //   res.sendFile(indexPath);
    // });

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
