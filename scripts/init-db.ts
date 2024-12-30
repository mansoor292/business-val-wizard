import { client, db, initializeDb } from '../src/lib/db';
import { seed } from './seed-db';

async function main() {
  try {
    console.log('Initializing database...');
    await initializeDb();
    console.log('Database initialized successfully!');
    
    console.log('Seeding database...');
    await seed();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main();
