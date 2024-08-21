import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { env } from "../../env";
import postgres from "postgres";
const sql = postgres(env.DATABASE_URL, { max: 1 });
export const db = drizzle(sql);
