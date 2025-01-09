import { NeonDialect } from "kysely-neon";
import { Kysely } from "kysely";
import type { DB } from "@/generated/db/types";
import { neonConfig } from "@neondatabase/serverless";

// if we're running locally
if (!process.env.VERCEL_ENV) {
  // Set the WebSocket proxy to work with the local instance
  neonConfig.wsProxy = (host) => `${host}:5433/v1`;
  // Disable all authentication and encryption
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not set");
}

export const db = new Kysely<DB>({
  dialect: new NeonDialect({
    connectionString: process.env.POSTGRES_URL,
  }),
});

const posts = await sql('SELECT * FROM posts WHERE id = $1', [postId]);
