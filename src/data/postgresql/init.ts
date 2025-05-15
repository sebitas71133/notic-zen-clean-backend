import { Pool } from "pg";
import { envs } from "../../config/envs";

export const pgPool = new Pool({
  host: envs.PG_HOST,
  port: envs.PG_PORT,
  user: envs.PG_USER,
  password: envs.PG_PASSWORD,
  database: envs.PG_DATABASE,
});
