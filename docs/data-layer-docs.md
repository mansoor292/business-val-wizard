# Flexible Data Layer Implementation Guide

## Overview

This document outlines our approach to implementing a flexible data layer that works seamlessly across development, testing, and production environments using Drizzle ORM. The architecture supports both in-memory databases (pg-mem) and production PostgreSQL instances while maintaining a single, consistent codebase.

## Core Components

### 1. Database Configuration

The database configuration is environment-aware and type-safe:

```typescript
type DbConfig = {
  type: 'pg-mem' | 'postgres';
  postgres?: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
  };
};
```

Configuration is managed through environment-specific settings:

```typescript
const databaseConfig = {
  development: {
    type: 'pg-mem',
  },
  production: {
    type: 'postgres',
    postgres: {
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT!, 10),
      database: process.env.DB_NAME!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
    },
  },
};
```

### 2. Schema Definition

Schemas are defined once and work across all environments:

```typescript
// schema/your-model.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const yourModel = pgTable('table_name', {
  id: serial('id').primaryKey(),
  // Define your columns here
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export type YourModel = typeof yourModel.$inferSelect;
export type NewYourModel = typeof yourModel.$inferInsert;
```

### 3. Database Client

The DatabaseClient handles connection management and provides a unified interface:

```typescript
export class DatabaseClient {
  private db: any;
  private config: DbConfig;

  constructor(config: DbConfig) {
    this.config = config;
  }

  async connect() {
    if (this.config.type === 'pg-mem') {
      const mem = newDb();
      const pool = mem.adapters.createPg();
      this.db = drizzle(pool);
    } else {
      const pool = new Pool(this.config.postgres);
      this.db = drizzle(pool);
    }
    return this.db;
  }

  getDb() {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }
}
```

### 4. Repository Pattern

Each model gets its own repository implementing standard CRUD operations:

```typescript
export class BaseRepository<T, N> {
  constructor(
    protected db: any,
    protected table: any
  ) {}

  async findById(id: number): Promise<T | undefined> {
    const result = await this.db.select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);
    return result[0];
  }

  async create(data: N): Promise<T> {
    const result = await this.db.insert(this.table)
      .values(data)
      .returning();
    return result[0];
  }

  // Add other common operations
}
```

## Implementation Steps

1. **Define Your Schema**
   - Create schema files for each model
   - Define types for select and insert operations
   - Add relationships between models if needed

2. **Create Repositories**
   - Extend BaseRepository for each model
   - Add model-specific methods
   - Implement custom queries

3. **Setup Database Client**
   - Initialize with appropriate configuration
   - Connect before use
   - Handle connection lifecycle

4. **Initialize Application**
   ```typescript
   async function setupDatabase() {
     const config = process.env.NODE_ENV === 'production' 
       ? databaseConfig.production 
       : databaseConfig.development;

     const client = new DatabaseClient(config);
     await client.connect();
     
     return {
       db: client.getDb(),
       repos: {
         // Initialize your repositories here
         yourModel: new YourModelRepository(client.getDb()),
       },
     };
   }
   ```

## Testing

### Unit Tests

```typescript
describe('YourModelRepository', () => {
  let db: any;
  let repo: YourModelRepository;

  beforeEach(async () => {
    const client = new DatabaseClient({ type: 'pg-mem' });
    await client.connect();
    db = client.getDb();
    repo = new YourModelRepository(db);
  });

  it('should perform operations', async () => {
    // Your tests here
  });
});
```

### Integration Tests

For integration tests, you can use either:
- pg-mem for faster tests
- TestContainers for full PostgreSQL compatibility
- Dedicated test database

## Best Practices

1. **Type Safety**
   - Always use types generated from your schema
   - Avoid using 'any' in your repositories
   - Use zod or similar for runtime validation

2. **Error Handling**
   - Create custom error classes for database operations
   - Handle connection errors gracefully
   - Implement retry mechanisms for transient failures

3. **Migrations**
   - Keep migrations in version control
   - Test migrations in both pg-mem and PostgreSQL
   - Include rollback procedures

4. **Performance**
   - Implement connection pooling
   - Use transactions where appropriate
   - Consider implementing caching layer

## Adding New Models

1. Create schema file:
   ```typescript
   // schema/new-model.ts
   export const newModel = pgTable('new_model', {
     // Define columns
   });
   ```

2. Create repository:
   ```typescript
   // repositories/new-model-repository.ts
   export class NewModelRepository extends BaseRepository<NewModel, NewNewModel> {
     constructor(db: any) {
       super(db, newModel);
     }
     
     // Add custom methods
   }
   ```

3. Add to database setup:
   ```typescript
   const { repos } = await setupDatabase();
   const newModelRepo = repos.newModel;
   ```

## Debugging

1. Enable SQL logging in development:
   ```typescript
   if (process.env.NODE_ENV !== 'production') {
     // Log queries
   }
   ```

2. Use pg-mem debugging features:
   ```typescript
   const mem = newDb({ debug: true });
   ```

## Migration Guide

When migrating from another ORM or database:

1. Create schema definitions
2. Implement repositories
3. Write data migration scripts
4. Test in pg-mem
5. Test in staging environment
6. Deploy to production

## Conclusion

This approach provides:
- Consistent development experience
- Reliable testing
- Production-ready architecture
- Type safety
- Easy onboarding for new team members

The implementation is flexible enough to accommodate different data models while maintaining a consistent interface across all environments.

## Example Implementation

Here's a complete example implementation of the data layer with real-time capabilities:

```typescript
// types/database.ts
export type DbConfig = {
  type: 'pg-mem' | 'postgres';
  postgres?: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
  };
};

// lib/realtime.ts
import { EventEmitter } from 'events';
import { Pool } from 'pg';

export interface RealtimeProvider {
  notify(channel: string, payload: string): Promise<void>;
  listen(channel: string, callback: (payload: string) => void): Promise<void>;
  unlisten(channel: string): Promise<void>;
}

class PgMemRealtimeProvider implements RealtimeProvider {
  private eventEmitter = new EventEmitter();

  async notify(channel: string, payload: string) {
    this.eventEmitter.emit(channel, payload);
  }

  async listen(channel: string, callback: (payload: string) => void) {
    this.eventEmitter.on(channel, callback);
  }

  async unlisten(channel: string) {
    this.eventEmitter.removeAllListeners(channel);
  }
}

class PostgresRealtimeProvider implements RealtimeProvider {
  private listeners: Map<string, any> = new Map();

  constructor(private pool: Pool) {}

  async notify(channel: string, payload: string) {
    const client = await this.pool.connect();
    try {
      await client.query('NOTIFY $1, $2', [channel, payload]);
    } finally {
      client.release();
    }
  }

  async listen(channel: string, callback: (payload: string) => void) {
    const client = await this.pool.connect();
    await client.query('LISTEN $1', [channel]);
    
    const handler = (msg: any) => {
      if (msg.channel === channel) {
        callback(msg.payload);
      }
    };

    client.on('notification', handler);
    this.listeners.set(channel, { client, handler });
  }

  async unlisten(channel: string) {
    const listener = this.listeners.get(channel);
    if (listener) {
      const { client, handler } = listener;
      client.removeListener('notification', handler);
      await client.query('UNLISTEN $1', [channel]);
      client.release();
      this.listeners.delete(channel);
    }
  }
}

// lib/database.ts
import { newDb } from 'pg-mem';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DbConfig } from '../types/database';
import { RealtimeProvider, PgMemRealtimeProvider, PostgresRealtimeProvider } from './realtime';

export class DatabaseClient {
  private db: any;
  private pool: Pool | null = null;
  private realtimeProvider: RealtimeProvider;

  constructor(private config: DbConfig) {
    if (config.type === 'pg-mem') {
      this.realtimeProvider = new PgMemRealtimeProvider();
    } else {
      this.pool = new Pool(config.postgres);
      this.realtimeProvider = new PostgresRealtimeProvider(this.pool);
    }
  }

  async connect() {
    if (this.config.type === 'pg-mem') {
      const mem = newDb();
      const pool = mem.adapters.createPg();
      this.db = drizzle(pool);
    } else {
      this.db = drizzle(this.pool!);
    }
    return this.db;
  }

  async disconnect() {
    if (this.pool) {
      await this.pool.end();
    }
  }

  getDb() {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }

  getRealtime() {
    return this.realtimeProvider;
  }
}

// lib/base-repository.ts
import { eq } from 'drizzle-orm';

export class BaseRepository<T extends { id: number }, N> {
  constructor(
    protected db: any,
    protected table: any,
    protected realtime: RealtimeProvider
  ) {}

  protected get channelName() {
    return `${this.table.name}_changes`;
  }

  async findById(id: number): Promise<T | undefined> {
    const result = await this.db.select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);
    return result[0];
  }

  async create(data: N): Promise<T> {
    const result = await this.db.insert(this.table)
      .values(data)
      .returning();
    
    const created = result[0];
    await this.realtime.notify(this.channelName, 
      JSON.stringify({ type: 'created', data: created })
    );
    
    return created;
  }

  async update(id: number, data: Partial<N>): Promise<T | undefined> {
    const result = await this.db.update(this.table)
      .set(data)
      .where(eq(this.table.id, id))
      .returning();

    const updated = result[0];
    if (updated) {
      await this.realtime.notify(this.channelName,
        JSON.stringify({ type: 'updated', data: updated })
      );
    }
    
    return updated;
  }

  async delete(id: number): Promise<void> {
    const result = await this.db.delete(this.table)
      .where(eq(this.table.id, id))
      .returning();
    
    if (result[0]) {
      await this.realtime.notify(this.channelName,
        JSON.stringify({ type: 'deleted', data: { id } })
      );
    }
  }

  async subscribeToChanges(callback: (event: { type: string, data: any }) => void) {
    await this.realtime.listen(this.channelName, (payload) => {
      callback(JSON.parse(payload));
    });
  }

  async unsubscribeFromChanges() {
    await this.realtime.unlisten(this.channelName);
  }
}

// Example usage:
async function example() {
  // Setup
  const config = process.env.NODE_ENV === 'production'
    ? {
        type: 'postgres' as const,
        postgres: {
          host: process.env.DB_HOST!,
          port: parseInt(process.env.DB_PORT!, 10),
          database: process.env.DB_NAME!,
          user: process.env.DB_USER!,
          password: process.env.DB_PASSWORD!,
        },
      }
    : { type: 'pg-mem' as const };

  const client = new DatabaseClient(config);
  await client.connect();

  // Create your repositories with realtime support
  const yourRepo = new BaseRepository(
    client.getDb(),
    yourModel,
    client.getRealtime()
  );

  // Subscribe to changes
  await yourRepo.subscribeToChanges((event) => {
    console.log(`Change detected: ${event.type}`, event.data);
  });

  // Perform operations
  const created = await yourRepo.create({
    // your data
  });

  // Clean up
  await yourRepo.unsubscribeFromChanges();
  await client.disconnect();
}
```

This implementation provides:
- Unified interface for both pg-mem and PostgreSQL
- Real-time capabilities with LISTEN/NOTIFY
- Automatic notifications for CRUD operations
- Clean connection management
- Type-safe operations
- Easy subscription to changes

## Use Cases

### 1. Unit Testing with pg-mem

Perfect for fast, isolated tests that don't require full PostgreSQL compatibility.

```typescript
// tests/unit/user-repository.test.ts
import { describe, beforeEach, it, expect } from 'vitest';
import { DatabaseClient } from '../../lib/database';
import { UserRepository } from '../../repositories/user-repository';
import { users } from '../../schema';

describe('UserRepository', () => {
  let db: DatabaseClient;
  let userRepo: UserRepository;

  beforeEach(async () => {
    // Setup in-memory database
    db = new DatabaseClient({ type: 'pg-mem' });
    await db.connect();
    
    userRepo = new UserRepository(
      db.getDb(),
      users,
      db.getRealtime()
    );
  });

  it('should handle real-time events', async () => {
    const events: any[] = [];
    await userRepo.subscribeToChanges((event) => {
      events.push(event);
    });

    const user = await userRepo.create({
      name: 'Test User',
      email: 'test@example.com'
    });

    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({
      type: 'created',
      data: user
    });
  });
});

// Example of mocking time-based operations
describe('TimeBasedOperations', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should handle scheduled operations', async () => {
    // Your test here
    vi.advanceTimersByTime(1000);
  });
});
```

### 2. Integration Testing with Docker

Useful for tests that require real PostgreSQL features and behavior.

```typescript
// tests/integration/setup.ts
import { GenericContainer, Wait } from 'testcontainers';
import { DatabaseClient } from '../../lib/database';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

export async function setupTestDatabase() {
  // Start PostgreSQL container
  const container = await new GenericContainer('postgres:15')
    .withEnvironment({
      POSTGRES_USER: 'test',
      POSTGRES_PASSWORD: 'test',
      POSTGRES_DB: 'testdb',
    })
    .withExposedPorts(5432)
    .withWaitStrategy(Wait.forListeningPorts())
    .start();

  // Create database client
  const db = new DatabaseClient({
    type: 'postgres',
    postgres: {
      host: container.getHost(),
      port: container.getMappedPort(5432),
      database: 'testdb',
      user: 'test',
      password: 'test',
    },
  });

  await db.connect();
  
  // Run migrations
  await migrate(db.getDb(), {
    migrationsFolder: './drizzle',
  });

  return {
    db,
    container,
    cleanup: async () => {
      await db.disconnect();
      await container.stop();
    },
  };
}

// tests/integration/real-time.test.ts
describe('RealTime Integration', () => {
  let db: DatabaseClient;
  let cleanup: () => Promise<void>;

  beforeAll(async () => {
    const setup = await setupTestDatabase();
    db = setup.db;
    cleanup = setup.cleanup;
  });

  afterAll(async () => {
    await cleanup();
  });

  it('should handle LISTEN/NOTIFY', async () => {
    const userRepo = new UserRepository(
      db.getDb(),
      users,
      db.getRealtime()
    );

    const notifications: any[] = [];
    await userRepo.subscribeToChanges((event) => {
      notifications.push(event);
    });

    // Test concurrent operations
    await Promise.all([
      userRepo.create({ name: 'User 1', email: 'user1@example.com' }),
      userRepo.create({ name: 'User 2', email: 'user2@example.com' }),
    ]);

    expect(notifications).toHaveLength(2);
  });
});
```

### 3. Production Environment

Example of setting up the data layer in a production environment with proper error handling and monitoring.

```typescript
// lib/database-factory.ts
import { DatabaseClient } from './database';
import { Logger } from './logger';  // Your logging implementation
import { Metrics } from './metrics'; // Your metrics implementation

export async function createProductionDatabase() {
  const logger = new Logger();
  const metrics = new Metrics();

  const db = new DatabaseClient({
    type: 'postgres',
    postgres: {
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT!, 10),
      database: process.env.DB_NAME!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      // Production pool settings
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    },
  });

  // Add error handling
  process.on('SIGTERM', async () => {
    logger.info('SIGTERM received, shutting down database connections');
    await db.disconnect();
    process.exit(0);
  });

  // Monitor real-time events
  const realtime = db.getRealtime();
  const originalNotify = realtime.notify.bind(realtime);
  realtime.notify = async (channel: string, payload: string) => {
    const start = Date.now();
    try {
      await originalNotify(channel, payload);
      metrics.recordRealtimeEvent('notify', channel, Date.now() - start);
    } catch (error) {
      logger.error('Failed to send notification', { channel, error });
      metrics.recordRealtimeError('notify', channel);
      throw error;
    }
  };

  return db;
}

// app.ts
async function startApp() {
  const db = await createProductionDatabase();
  
  // Create repositories
  const repos = {
    users: new UserRepository(db.getDb(), users, db.getRealtime()),
    // other repositories...
  };

  // Setup real-time event handlers
  await repos.users.subscribeToChanges(async (event) => {
    try {
      switch (event.type) {
        case 'created':
          await handleUserCreated(event.data);
          break;
        case 'updated':
          await handleUserUpdated(event.data);
          break;
        case 'deleted':
          await handleUserDeleted(event.data);
          break;
      }
    } catch (error) {
      logger.error('Failed to handle user event', { event, error });
    }
  });

  // Start your app
  startServer(repos);
}
```

Each environment provides different benefits:

1. **pg-mem (Unit Tests)**
   - Fastest execution
   - No external dependencies
   - Perfect for testing business logic
   - Limited PostgreSQL feature support

2. **Docker (Integration Tests)**
   - Full PostgreSQL feature support
   - Isolated test environment
   - Tests actual database behavior
   - Slower than pg-mem
   - Requires Docker

3. **Production**
   - Real database connections
   - Connection pool management
   - Error handling and monitoring
   - Graceful shutdown
   - Resource cleanup
