import { BaseEntity } from './types';
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseMemoryAdapter<T extends BaseEntity> {
  protected items: T[] = [];

  protected createEntity<E extends BaseEntity>(data: Omit<E, keyof BaseEntity>): E {
    const now = new Date();
    return {
      ...data,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    } as E;
  }

  protected updateEntity<E extends BaseEntity>(entity: E, data: Partial<E>): E {
    return {
      ...entity,
      ...data,
      updatedAt: new Date(),
    };
  }

  async get(id: string): Promise<T> {
    const item = this.items.find(i => i.id === id);
    if (!item) throw new Error(`Item not found: ${id}`);
    return item;
  }

  async create(data: Omit<T, keyof BaseEntity>): Promise<T> {
    const item = this.createEntity<T>(data);
    this.items.push(item);
    return item;
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) throw new Error(`Item not found: ${id}`);
    const updated = this.updateEntity(this.items[index], data);
    this.items[index] = updated;
    return updated;
  }
}
