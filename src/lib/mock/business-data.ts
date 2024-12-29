import { faker } from '@faker-js/faker';
import { ValueProposition, Project, Task, Document, TeamMember } from '../data/types';

export function generateMockValuePropositions(count: number = 5): Omit<ValueProposition, 'id' | 'createdAt' | 'updatedAt'>[] {
  return Array.from({ length: count }, () => ({
    title: faker.commerce.productName(),
    description: faker.company.catchPhrase(),
    impact: faker.helpers.arrayElement(['HIGH', 'MEDIUM', 'LOW']),
    effort: faker.helpers.arrayElement(['LOW', 'MEDIUM', 'HIGH']),
    confidence: faker.helpers.arrayElement(['HIGH', 'MEDIUM', 'LOW'])
  }));
}

export function generateMockProjects(count: number = 5): Omit<Project, 'id' | 'createdAt' | 'updatedAt'>[] {
  return Array.from({ length: count }, () => ({
    name: faker.company.catchPhrase(),
    description: faker.company.buzzPhrase(),
    status: faker.helpers.arrayElement(['ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED']),
    startDate: faker.date.past(),
    endDate: faker.helpers.arrayElement([faker.date.future(), undefined]),
    teamIds: Array.from({ length: faker.number.int({ min: 2, max: 8 }) }, () => faker.string.uuid())
  }));
}

export function generateMockTasks(projectId: string, count: number = 8): Omit<Task, 'id' | 'createdAt' | 'updatedAt'>[] {
  return Array.from({ length: count }, () => ({
    title: faker.hacker.phrase(),
    description: faker.lorem.paragraph(),
    status: faker.helpers.arrayElement(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE']),
    assigneeId: faker.string.uuid(),
    dueDate: faker.date.future(),
    priority: faker.helpers.arrayElement(['LOW', 'MEDIUM', 'HIGH']),
    projectId
  }));
}

export function generateMockDocuments(projectId: string, count: number = 4): Omit<Document, 'id' | 'createdAt' | 'updatedAt'>[] {
  return Array.from({ length: count }, () => ({
    title: faker.system.fileName(),
    content: faker.lorem.paragraphs(),
    type: faker.helpers.arrayElement(['SPECIFICATION', 'DESIGN', 'DOCUMENTATION', 'OTHER']),
    projectId
  }));
}

export function generateMockTeamMembers(count: number = 10): Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>[] {
  const departments = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales'];
  const roles = {
    Engineering: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'QA Engineer'],
    Design: ['UI Designer', 'UX Designer', 'Product Designer', 'Visual Designer'],
    Product: ['Product Manager', 'Product Owner', 'Business Analyst', 'Scrum Master'],
    Marketing: ['Marketing Manager', 'Content Strategist', 'Growth Hacker', 'SEO Specialist'],
    Sales: ['Sales Manager', 'Account Executive', 'Sales Representative', 'Customer Success']
  };
  
  return Array.from({ length: count }, () => {
    const department = faker.helpers.arrayElement(departments);
    const role = faker.helpers.arrayElement(roles[department as keyof typeof roles]);
    const allSkills = [
      'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
      'UI/UX', 'Figma', 'Adobe XD', 'Sketch',
      'Agile', 'Scrum', 'Kanban',
      'SEO', 'Content Marketing', 'Social Media',
      'Sales', 'Negotiation', 'Customer Relations'
    ];
    const numSkills = faker.number.int({ min: 2, max: 5 });
    const skills = faker.helpers.arrayElements(allSkills, numSkills);

    return {
      name: faker.person.fullName(),
      role,
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      skills,
      department
    };
  });
}
