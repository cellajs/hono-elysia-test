import { hc } from "hono/client";
import { AppRoute } from ".";

export const client = hc<AppRoute>('/');