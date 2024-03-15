import { publicProcedure } from "../../server/trpc";

export const hello = publicProcedure.query(async () => "Hello World");
