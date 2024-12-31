// @ts-nocheck 
// lib/db.ts
'use server'

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DrizzleAdapter } from './drizzle-adapter';

let dbPromise: Promise<ReturnType<typeof drizzle>> | null = null;
let adapterPromise: Promise<DrizzleAdapter> | null = null;

export async function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const client = postgres('postgres://drizzle:drizzle123@devdb.catalogshub.com:5432/business_val_wizard');
      return drizzle(client);
    })();
  }
  return dbPromise;
}

export async function getDrizzleAdapter() {
  if (!adapterPromise) {
    adapterPromise = (async () => {
      const database = await getDb();
      return new DrizzleAdapter(database);
    })();
  }
  return adapterPromise;
}

export { DrizzleAdapter };
