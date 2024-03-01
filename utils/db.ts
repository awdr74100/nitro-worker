import { drizzle, DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "../db/schema";
import type { H3Event } from "h3";

let _db: DrizzleD1Database<typeof schema>;

export const useDB = (event: H3Event) => {
  if (_db) return _db;

  _db = drizzle(event.context.cloudflare.env.DB || process.env.DB);

  return _db;
};
