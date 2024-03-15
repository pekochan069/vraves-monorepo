import { createTursoClient, createDB } from "@vraves/db";
import { env } from "./env";

 
const dbClient = createTursoClient(env.TURSO_AUTH_TOKEN, env.TURSO_URL);
export const db = createDB(dbClient);
import { client } from './trpc';