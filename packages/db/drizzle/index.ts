import { drizzle } from "drizzle-orm/libsql";
import { createClient, type Client } from "@libsql/client";

export function createTursoClient(authToken: string, url: string) {
  return createClient({
    authToken,
    url,
  });
}

export function createDB(client: Client) {
  return drizzle(client);
}

export * from "drizzle-orm";
