import type { Config } from 'drizzle-kit';

export default {
  schema: ['./drizzle/schema.ts','./drizzle/relations.ts'],
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'devdb.catalogshub.com',
    port: 5432,
    user: 'drizzle',
    password: 'drizzle123',
    database: 'business_val_wizard',
    ssl: {
      rejectUnauthorized: false
    }
  }
} satisfies Config;
