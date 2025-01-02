import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/data/implementations/drizzle/schema/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'mansoor.co0srbxoe3rr.us-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'mansoor123',
    database: 'production',
    ssl: {
      rejectUnauthorized: false
    }
  }
} satisfies Config;
