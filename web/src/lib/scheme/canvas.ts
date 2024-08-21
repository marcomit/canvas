import { serial, text, timestamp, pgTable, boolean } from "drizzle-orm/pg-core";
export const canvas = pgTable("canvas", {
  id: serial("id"),
  name: text("name"),
  createdAt: timestamp("createdAt", { mode: "date" }),
  isActive: boolean("isActive"),
  imageUrl: text("imageUrl"),
});
