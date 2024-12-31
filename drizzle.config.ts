import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/data/implementations/drizzle/schema/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'devdb.catalogshub.com',
    port: 5432,
    user: 'drizzle',
    password: 'drizzle123',
    database: 'business_val_wizard'
  }
} satisfies Config;
