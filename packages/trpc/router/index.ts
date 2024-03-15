import { router } from "../server/trpc";
import { hello } from "./backend-router/hello";

export const backendRouter = router({
  hello,
});

export type BackendRouter = typeof backendRouter;
