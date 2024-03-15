import type { BackendRouter } from "@vraves/trpc";
import { createTRPCProxyClient, httpBatchLink } from "@vraves/trpc";

import { env } from "./env";

export const client = createTRPCProxyClient<BackendRouter>({
  links: [
    httpBatchLink({
      url: env.NODE_ENV === "production" ? env.API_ROUTE : env.API_ROUTE_LOCAL,
    }),
  ],
});
