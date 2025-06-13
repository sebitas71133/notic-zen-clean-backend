import "dotenv/config";

import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  JWT_SEED: get("JWT_SEED").required().asString(),

  WEBSERVICE_URL: get("WEBSERVICE_URL").required().asString(),
  CLIENT_URL: get("CLIENT_URL").required().asString(),
  MAILER_SERVICE: get("MAILER_SERVICE").required().asString(),
  MAILER_EMAIL: get("MAILER_EMAIL").required().asString(),
  MAILER_SECRET_KEY: get("MAILER_SECRET_KEY").required().asString(),

  // PG_HOST: get("PG_HOST").required().asString(),
  // PG_PORT: get("PG_PORT").required().asPortNumber(),
  // PG_USER: get("PG_USER").required().asString(),
  // PG_PASSWORD: get("PG_PASSWORD").required().asString(),
  // PG_DATABASE: get("PG_DATABASE").required().asString(),

  CLOUDINARY_NAME: get("CLOUDINARY_NAME").required().asString(),
  CLOUDINARY_API_KEY: get("CLOUDINARY_API_KEY").required().asString(),
  CLOUDINARY_API_SECRET: get("CLOUDINARY_API_SECRET").required().asString(),

  SIGHTENGINE_USER: get("SIGHTENGINE_USER").required().asString(),
  SIGHTENGINE_SECRET: get("SIGHTENGINE_SECRET").required().asString(),
  SIGHTENGINE_API_URL: get("SIGHTENGINE_API_URL").required().asString(),
};
