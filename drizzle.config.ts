import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/schema/*',
  out: './drizzle',
  dialect: 'postgresql',
  driver: 'pglite',
  dbCredentials: {
    url: './data.db'  // Points to your file database
  }
} satisfies Config;
