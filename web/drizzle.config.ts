import { defineConfig } from "drizzle-kit";
import { env } from "./env";
export default defineConfig({
  schema: "./src/lib/scheme/*.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: "postgresql",
});
