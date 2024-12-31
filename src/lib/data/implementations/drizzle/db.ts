import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema/schema';

class Database {
  private static instance: Database;
  private client: postgres.Sql;
  private db: ReturnType<typeof drizzle>;

  private constructor() {
    // Initialize postgres client with remote database
    this.client = postgres('postgres://drizzle:drizzle123@devdb.catalogshub.com:5432/business_val_wizard');
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
  return getDatabase();
}
