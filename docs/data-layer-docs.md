# Business Value Wizard Data Layer Implementation

## Overview

This document outlines our approach to implementing a flexible data layer using Drizzle ORM with pg-mem for development and testing. The architecture maintains our existing DataAdapter interface while providing improved type safety and query capabilities through Drizzle ORM.

## Core Components

### 1. Schema Definition

We'll convert our existing Zod schemas to Drizzle schema definitions while maintaining the same structure:

```typescript
// Example schema definition
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const teamMembers = pgTable('team_members', {
  id: varchar('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
  name: text('name').notNull(),
  role: text('role').notNull(),
  email: text('email').notNull(),
  avatar: text('avatar'),
  department: text('department').notNull(),
  reportsTo: varchar('reports_to').references(() => teamMembers.id),
  skills: text('skills').array(),
});

// Type inference
export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;
```

### 2. Database Client

The DatabaseClient provides a unified interface for working with pg-mem:

```typescript
export class DatabaseClient {
  private db: any;
  private pool: any;

  async initialize() {
    const mem = newDb();
    this.pool = mem.adapters.createPg();
    this.db = drizzle(this.pool);
    
    // Initialize schema
    await this.setupSchema();
    // Seed initial data
    await this.seedData();
    
    return this.db;
  }

  private async setupSchema() {
    // Create tables using schema definitions
  }

  private async seedData() {
    // Use existing mock data generators to seed the database
  }

  getDb() {
    if (!this.db) {
      throw new Error('Database not initialized. Call initialize() first.');
    }
    return this.db;
  }
}
```

### 3. Data Adapter Implementation

We maintain our existing DataAdapter interface while using Drizzle under the hood:

```typescript
export class DrizzleDataAdapter implements DataAdapter {
  constructor(private db: any) {}

  // Example implementation for team members
  async getTeamMember(id: string): Promise<TeamMember> {
    const result = await this.db.select()
      .from(teamMembers)
      .where(eq(teamMembers.id, id))
      .limit(1);
    
    if (!result[0]) throw new Error('Team member not found');
    return result[0];
  }

  async listTeamMembers(filters?: TeamMemberFilters): Promise<TeamMember[]> {
    let query = this.db.select().from(teamMembers);
    
    if (filters?.department) {
      query = query.where(eq(teamMembers.department, filters.department));
    }
    
    if (filters?.searchTerm) {
      query = query.where(
        or(
          ilike(teamMembers.name, `%${filters.searchTerm}%`),
          ilike(teamMembers.role, `%${filters.searchTerm}%`)
        )
      );
    }
    
    return query;
  }

  // Implement other interface methods...
}
```

### 4. Data Seeding

We leverage our existing mock data generators for seeding the database:

```typescript
export async function seedDatabase(db: any) {
  // Use existing mock data generators
  const mockTeamMembers = generateMockTeamMembers();
  const mockProjects = generateMockProjects();
  
  // Insert mock data using Drizzle
  await db.insert(teamMembers).values(mockTeamMembers);
  await db.insert(projects).values(mockProjects);
  
  // Generate and insert related data
  for (const project of mockProjects) {
    const mockTasks = generateMockTasks(project.id);
    const mockDocuments = generateMockDocuments(project.id);
    
    await db.insert(tasks).values(mockTasks);
    await db.insert(documents).values(mockDocuments);
  }
}
```

## Implementation Steps

1. **Schema Migration**
   - Convert each Zod schema to its Drizzle equivalent
   - Maintain existing relationships and constraints
   - Ensure type definitions align with current usage

2. **Database Setup**
   - Implement DatabaseClient with pg-mem initialization
   - Set up schema creation
   - Configure Drizzle with the pg-mem instance

3. **Adapter Implementation**
   - Create DrizzleDataAdapter class
   - Implement all DataAdapter interface methods
   - Maintain existing filtering capabilities
   - Ensure type safety between Drizzle and domain types

4. **Data Seeding**
   - Use existing mock data generators
   - Implement seeding functionality in DatabaseClient
   - Ensure data relationships are maintained during seeding

5. **Integration**
   - Update data context provider to use DrizzleDataAdapter
   - Keep existing hooks and operations unchanged
   - Verify all functionality with new implementation

## Testing

```typescript
describe('DrizzleDataAdapter', () => {
  let db: any;
  let adapter: DrizzleDataAdapter;

  beforeEach(async () => {
    const client = new DatabaseClient();
    db = await client.initialize();
    adapter = new DrizzleDataAdapter(db);
  });

  it('should list team members with filters', async () => {
    const members = await adapter.listTeamMembers({
      department: 'Engineering'
    });
    expect(members.length).toBeGreaterThan(0);
    expect(members[0].department).toBe('Engineering');
  });
});
```

## Best Practices

1. **Type Safety**
   - Use Drizzle's type inference capabilities
   - Maintain strict typing between layers
   - Validate data at boundaries

2. **Query Building**
   - Use Drizzle's query builders for type-safe queries
   - Implement efficient filtering
   - Maintain consistent query patterns

3. **Error Handling**
   - Implement consistent error handling
   - Provide meaningful error messages
   - Handle edge cases appropriately

4. **Testing**
   - Test with pg-mem for fast unit tests
   - Verify all DataAdapter interface methods
   - Test edge cases and error conditions

## Adding New Features

1. Define schema:
   ```typescript
   export const newModel = pgTable('new_model', {
     // Define columns
   });
   ```

2. Update DrizzleDataAdapter:
   ```typescript
   async getNewModel(id: string): Promise<NewModel> {
     // Implement method
   }
   ```

3. Add to seeding process:
   ```typescript
   const mockData = generateMockNewModel();
   await db.insert(newModel).values(mockData);
   ```

## Debugging

Enable SQL logging in development:
```typescript
const db = drizzle(pool, {
  logger: true
});
```

## Benefits

This implementation provides:
- Type safety through Drizzle ORM
- Fast, in-memory database for development
- Consistent interface with existing code
- Easy testing with pg-mem
- Maintainable and scalable architecture

The approach allows us to leverage Drizzle's features while maintaining compatibility with our existing application structure and development workflow.
