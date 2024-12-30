import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import * as schema from './schema/base';
import { DrizzleAdapter } from './drizzle-adapter';

// Initialize PGLite with file persistence
export const client = new PGlite("./data.db");

// Create drizzle database instance
export const db = drizzle(client, { schema, logger: true });

// Initialize database and run migrations
export async function initializeDb() {
  // Enable UUID extension
  // await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  
  // Run migrations
  // await migrate(db, { migrationsFolder: "./drizzle" });
  
  return new DrizzleAdapter(db);
}
