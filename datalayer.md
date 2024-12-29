// types.ts
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  company: string;
  status: 'lead' | 'prospect' | 'customer' | 'churned';
  lastContactDate?: Date;
}

export interface Deal extends BaseEntity {
  customerId: string;
  title: string;
  value: number;
  status: 'new' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';
  closeDate?: Date;
  probability: number;
}

export interface Activity extends BaseEntity {
  type: 'call' | 'email' | 'meeting' | 'note';
  customerId: string;
  dealId?: string;
  description: string;
  scheduledDate?: Date;
  completed: boolean;
}

// Data Adapter Interface
export interface CRMDataAdapter {
  // Customer operations
  getCustomer(id: string): Promise<Customer>;
  listCustomers(filters?: CustomerFilters): Promise<Customer[]>;
  createCustomer(data: Omit<Customer, keyof BaseEntity>): Promise<Customer>;
  updateCustomer(id: string, data: Partial<Customer>): Promise<Customer>;
  
  // Deal operations
  getDeal(id: string): Promise<Deal>;
  listDeals(filters?: DealFilters): Promise<Deal[]>;
  createDeal(data: Omit<Deal, keyof BaseEntity>): Promise<Deal>;
  updateDeal(id: string, data: Partial<Deal>): Promise<Deal>;
  
  // Activity operations
  getActivity(id: string): Promise<Activity>;
  listActivities(filters?: ActivityFilters): Promise<Activity[]>;
  createActivity(data: Omit<Activity, keyof BaseEntity>): Promise<Activity>;
  updateActivity(id: string, data: Partial<Activity>): Promise<Activity>;
}

// Filter types
export interface CustomerFilters {
  status?: Customer['status'];
  company?: string;
  searchTerm?: string;
}

export interface DealFilters {
  status?: Deal['status'];
  customerId?: string;
  minValue?: number;
  maxValue?: number;
}

export interface ActivityFilters {
  type?: Activity['type'];
  customerId?: string;
  dealId?: string;
  completed?: boolean;
  dateRange?: { start: Date; end: Date };
}


// inMemoryAdapter.ts
import { CRMDataAdapter, Customer, Deal, Activity, CustomerFilters, DealFilters, ActivityFilters } from './types';

export class InMemoryAdapter implements CRMDataAdapter {
  private customers: Map<string, Customer> = new Map();
  private deals: Map<string, Deal> = new Map();
  private activities: Map<string, Activity> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed Customers
    const mockCustomers: Customer[] = [
      {
        id: 'c1',
        name: 'Acme Corp',
        email: 'contact@acme.com',
        company: 'Acme Corporation',
        status: 'customer',
        phone: '555-0100',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        lastContactDate: new Date('2024-03-15')
      },
      {
        id: 'c2',
        name: 'TechStart Inc',
        email: 'info@techstart.com',
        company: 'TechStart',
        status: 'prospect',
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-01')
      }
    ];

    // Seed Deals
    const mockDeals: Deal[] = [
      {
        id: 'd1',
        customerId: 'c1',
        title: 'Enterprise License',
        value: 50000,
        status: 'negotiation',
        probability: 0.8,
        createdAt: new Date('2024-02-15'),
        updatedAt: new Date('2024-03-01'),
        closeDate: new Date('2024-04-30')
      },
      {
        id: 'd2',
        customerId: 'c2',
        title: 'Pilot Project',
        value: 10000,
        status: 'proposal',
        probability: 0.5,
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01')
      }
    ];

    // Seed Activities
    const mockActivities: Activity[] = [
      {
        id: 'a1',
        type: 'meeting',
        customerId: 'c1',
        dealId: 'd1',
        description: 'Contract review meeting',
        completed: true,
        scheduledDate: new Date('2024-03-15'),
        createdAt: new Date('2024-03-10'),
        updatedAt: new Date('2024-03-15')
      },
      {
        id: 'a2',
        type: 'call',
        customerId: 'c2',
        description: 'Initial discovery call',
        completed: false,
        scheduledDate: new Date('2024-03-20'),
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01')
      }
    ];

    // Populate maps
    mockCustomers.forEach(c => this.customers.set(c.id, c));
    mockDeals.forEach(d => this.deals.set(d.id, d));
    mockActivities.forEach(a => this.activities.set(a.id, a));
  }

  // Customer operations
  async getCustomer(id: string): Promise<Customer> {
    const customer = this.customers.get(id);
    if (!customer) throw new Error('Customer not found');
    return customer;
  }

  async listCustomers(filters?: CustomerFilters): Promise<Customer[]> {
    let result = Array.from(this.customers.values());
    
    if (filters?.status) {
      result = result.filter(c => c.status === filters.status);
    }
    if (filters?.company) {
      result = result.filter(c => c.company.toLowerCase().includes(filters.company!.toLowerCase()));
    }
    if (filters?.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.company.toLowerCase().includes(term)
      );
    }
    
    return result;
  }

  async createCustomer(data: Omit<Customer, keyof BaseEntity>): Promise<Customer> {
    const now = new Date();
    const customer: Customer = {
      ...data,
      id: `c${this.customers.size + 1}`,
      createdAt: now,
      updatedAt: now
    };
    this.customers.set(customer.id, customer);
    return customer;
  }

  async updateCustomer(id: string, data: Partial<Customer>): Promise<Customer> {
    const customer = await this.getCustomer(id);
    const updated = {
      ...customer,
      ...data,
      updatedAt: new Date()
    };
    this.customers.set(id, updated);
    return updated;
  }

  // Deal operations
  async getDeal(id: string): Promise<Deal> {
    const deal = this.deals.get(id);
    if (!deal) throw new Error('Deal not found');
    return deal;
  }

  async listDeals(filters?: DealFilters): Promise<Deal[]> {
    let result = Array.from(this.deals.values());
    
    if (filters?.status) {
      result = result.filter(d => d.status === filters.status);
    }
    if (filters?.customerId) {
      result = result.filter(d => d.customerId === filters.customerId);
    }
    if (filters?.minValue !== undefined) {
      result = result.filter(d => d.value >= filters.minValue!);
    }
    if (filters?.maxValue !== undefined) {
      result = result.filter(d => d.value <= filters.maxValue!);
    }
    
    return result;
  }

  // Activity operations
  async getActivity(id: string): Promise<Activity> {
    const activity = this.activities.get(id);
    if (!activity) throw new Error('Activity not found');
    return activity;
  }

  async listActivities(filters?: ActivityFilters): Promise<Activity[]> {
    let result = Array.from(this.activities.values());
    
    if (filters?.type) {
      result = result.filter(a => a.type === filters.type);
    }
    if (filters?.customerId) {
      result = result.filter(a => a.customerId === filters.customerId);
    }
    if (filters?.dealId) {
      result = result.filter(a => a.dealId === filters.dealId);
    }
    if (filters?.completed !== undefined) {
      result = result.filter(a => a.completed === filters.completed);
    }
    if (filters?.dateRange) {
      result = result.filter(a => {
        if (!a.scheduledDate) return false;
        return a.scheduledDate >= filters.dateRange!.start && 
               a.scheduledDate <= filters.dateRange!.end;
      });
    }
    
    return result;
  }
}

// Usage example
const memoryAdapter = new InMemoryAdapter();

// In your app
function App() {
  return (
    <CRMProvider adapter={memoryAdapter}>
      <Dashboard />
    </CRMProvider>
  );
}
// DynamoDB Adapter Implementation
import { DynamoDB } from 'aws-sdk';

export class DynamoDBAdapter implements CRMDataAdapter {
  constructor(private dynamodb: DynamoDB.DocumentClient) {}

  async getCustomer(id: string): Promise<Customer> {
    const result = await this.dynamodb.get({
      TableName: 'customers',
      Key: { id }
    }).promise();
    
    if (!result.Item) throw new Error('Customer not found');
    return result.Item as Customer;
  }

  async listCustomers(filters?: CustomerFilters): Promise<Customer[]> {
    let filterExpression = '';
    const expressionValues: Record<string, any> = {};
    
    if (filters?.status) {
      filterExpression += 'status = :status';
      expressionValues[':status'] = filters.status;
    }
    
    const result = await this.dynamodb.scan({
      TableName: 'customers',
      FilterExpression: filterExpression || undefined,
      ExpressionAttributeValues: Object.keys(expressionValues).length ? expressionValues : undefined
    }).promise();
    
    return (result.Items || []) as Customer[];
  }
  
  // Implement other methods...
}

// Drizzle ORM Adapter Implementation
import { eq } from 'drizzle-orm';
import { pgTable, text, timestamp, numeric } from 'drizzle-orm/pg-core';

// Drizzle Schema
const customers = pgTable('customers', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company').notNull(),
  status: text('status').notNull(),
  lastContactDate: timestamp('last_contact_date'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
});

export class DrizzleAdapter implements CRMDataAdapter {
  constructor(private db: any) {}

  async getCustomer(id: string): Promise<Customer> {
    const result = await this.db.select()
      .from(customers)
      .where(eq(customers.id, id))
      .execute();
      
    if (!result[0]) throw new Error('Customer not found');
    return result[0];
  }

  async listCustomers(filters?: CustomerFilters): Promise<Customer[]> {
    let query = this.db.select().from(customers);
    
    if (filters?.status) {
      query = query.where(eq(customers.status, filters.status));
    }
    
    if (filters?.company) {
      query = query.where(eq(customers.company, filters.company));
    }
    
    return await query.execute();
  }
  
  // Implement other methods...
}

// React Context
import { createContext, useContext, ReactNode } from 'react';

interface CRMContextType {
  adapter: CRMDataAdapter;
}

const CRMContext = createContext<CRMContextType | undefined>(undefined);

export function CRMProvider({ 
  children, 
  adapter 
}: { 
  children: ReactNode; 
  adapter: CRMDataAdapter;
}) {
  return (
    <CRMContext.Provider value={{ adapter }}>
      {children}
    </CRMContext.Provider>
  );
}

export function useCRM() {
  const context = useContext(CRMContext);
  if (!context) {
    throw new Error('useCRM must be used within a CRMProvider');
  }
  return context;
}

// Example Usage
function CustomerList() {
  const { adapter } = useCRM();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function loadCustomers() {
      const result = await adapter.listCustomers({ 
        status: 'customer' 
      });
      setCustomers(result);
    }
    loadCustomers();
  }, [adapter]);

  return (
    <div>
      {customers.map(customer => (
        <div key={customer.id}>
          {customer.name} - {customer.company}
        </div>
      ))}
    </div>
  );
}