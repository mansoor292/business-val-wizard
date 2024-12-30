import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from './schema/schema';
import { DrizzleAdapter } from './drizzle-adapter';

class Database {
  private static instance: Database;
  private client: PGlite;
  private db: ReturnType<typeof drizzle>;

  private constructor() {
    // Initialize PGLite with file persistence
    this.client = new PGlite("./datadb");
    // Create drizzle database instance
    this.db = drizzle(this.client, { schema, logger: true });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getDb() {
    return this.db;
  }

  public getClient() {
    return this.client;
  }
}

export const getDatabase = () => Database.getInstance().getDb();


export async function initializeDb() {
  return new DrizzleAdapter(getDatabase());
}
