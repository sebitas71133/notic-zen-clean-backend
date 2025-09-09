import jwt, { SignOptions } from "jsonwebtoken";
import { envs } from "../../config/envs";
import { CustomError } from "../../domain/errors/custom.error";

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {
  //DI ?
  constructor() {}

  public static async generateToken(payload: any, duration: string = "12h") {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        JWT_SEED,
        {
          expiresIn: duration,
        } as SignOptions,
        (err, token) => {
          if (err) {
            console.log(err);
            reject("The token could not be generated");
          }

          resolve(token);
        }
      );
    });
  }

  public static validateToken<T>(token: string): Promise<T> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err) {
          // Detectar token expirado específicamente
          if (err.name === "TokenExpiredError") {
            return reject(CustomError.unauthorized("El token ha expirado"));
          }

          return reject(CustomError.unauthorized("Token inválido"));
        }

        resolve(decoded as T);
      });
    });
  }
}
