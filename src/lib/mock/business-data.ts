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

export function generateMockTeamMembers(): Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>[] {
  // Manufacturing company hierarchy with explicit reporting relationships
  const teamMembers = [
    // Level 1: CEO
    {
      name: "Robert Chen",
      role: "Chief Executive Officer",
      email: "r.chen@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      department: "Executive",
      reportsTo: null, // CEO has no manager
      skills: ["Leadership", "Strategic Planning", "Operations Management"]
    },

    // Level 2: C-Suite reporting to CEO
    {
      name: "Sarah Martinez",
      role: "Chief Operations Officer",
      email: "s.martinez@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      department: "Operations",
      reportsTo: "r.chen@manufacturing.com",
      skills: ["Operations Management", "Process Optimization", "Supply Chain"]
    },
    {
      name: "Michael Zhang",
      role: "Chief Technology Officer",
      email: "m.zhang@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      department: "Technology",
      reportsTo: "r.chen@manufacturing.com",
      skills: ["Industrial Automation", "Digital Transformation", "Industry 4.0"]
    },

    // Level 3: Department Managers reporting to COO
    {
      name: "James Wilson",
      role: "Production Manager",
      email: "j.wilson@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      department: "Production",
      reportsTo: "s.martinez@manufacturing.com",
      skills: ["Production Planning", "Lean Manufacturing", "Quality Control"]
    },
    {
      name: "Emily Thompson",
      role: "Quality Control Manager",
      email: "e.thompson@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      department: "Quality",
      reportsTo: "s.martinez@manufacturing.com",
      skills: ["Quality Assurance", "ISO Standards", "Process Improvement"]
    },
    {
      name: "David Kumar",
      role: "Maintenance Manager",
      email: "d.kumar@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      department: "Maintenance",
      reportsTo: "s.martinez@manufacturing.com",
      skills: ["Preventive Maintenance", "Equipment Repair", "Facility Management"]
    },

    // Level 4: Team Leads/Supervisors reporting to their respective managers
    {
      name: "Lisa Anderson",
      role: "Day Shift Supervisor",
      email: "l.anderson@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      department: "Production",
      reportsTo: "j.wilson@manufacturing.com",
      skills: ["Team Leadership", "Production Scheduling", "Safety Protocols"]
    },
    {
      name: "Thomas Rodriguez",
      role: "Night Shift Supervisor",
      email: "t.rodriguez@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
      department: "Production",
      reportsTo: "j.wilson@manufacturing.com",
      skills: ["Team Leadership", "Production Scheduling", "Safety Protocols"]
    },
    {
      name: "Maria Garcia",
      role: "Quality Assurance Lead",
      email: "m.garcia@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      department: "Quality",
      reportsTo: "e.thompson@manufacturing.com",
      skills: ["Quality Testing", "Documentation", "Training"]
    },
    {
      name: "John Lee",
      role: "Maintenance Team Lead",
      email: "j.lee@manufacturing.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      department: "Maintenance",
      reportsTo: "d.kumar@manufacturing.com",
      skills: ["Equipment Maintenance", "Troubleshooting", "Team Coordination"]
    }
  ];

  return teamMembers;
}
