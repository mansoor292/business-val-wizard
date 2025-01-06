// @ts-nocheck 
import { initializeDb, getDatabase } from '../drizzle/db';
import { seedManufacturing } from '../src/lib/data/implementations/drizzle/seed/seed-db';
import * as schema from '../src/lib/data/implementations/drizzle/schema';

async function clearDatabase(db: any) {
  console.log('Clearing database...');
  await db.delete(schema.comments);
  await db.delete(schema.documents);
  await db.delete(schema.tasks);
  await db.delete(schema.projects);
  await db.delete(schema.metrics);
  await db.delete(schema.initiatives);
  await db.delete(schema.valuePropositions);
  await db.delete(schema.teamMembers);
  console.log('Database cleared.');
}

async function main() {
  const adapter = await initializeDb();
  const shouldClear = process.argv.includes('--clear');
  
  try {
    if (shouldClear) {
      await clearDatabase(getDatabase());
    }
    await seedManufacturing(adapter);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
}

main();
