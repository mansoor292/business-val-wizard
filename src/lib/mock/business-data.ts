import { faker } from '@faker-js/faker';
import { ValueProposition } from '../data/types';

export function generateMockValuePropositions(count: number = 5): Omit<ValueProposition, 'id' | 'createdAt' | 'updatedAt'>[] {
  return Array.from({ length: count }, () => ({
    title: faker.commerce.productName(),
    description: faker.company.catchPhrase(),
    impact: faker.helpers.arrayElement(['HIGH', 'MEDIUM', 'LOW']),
    effort: faker.helpers.arrayElement(['LOW', 'MEDIUM', 'HIGH']),
    confidence: faker.helpers.arrayElement(['HIGH', 'MEDIUM', 'LOW'])
  }));
}
