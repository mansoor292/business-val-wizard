import { initializeDb } from '../src/lib/data/implementations/drizzle/db';
import { seedManufacturing } from './seed-db';

async function main() {
  try {
    console.log('Initializing database...');
    const adapter = await initializeDb();
    console.log('Database initialized successfully!');
    
    console.log('Seeding manufacturing data...');
    await seedManufacturing();
    console.log('Manufacturing data seeded successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main();
