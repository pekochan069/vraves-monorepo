import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("text").primaryKey(),
	googleId: text("google_id").notNull(),
});
