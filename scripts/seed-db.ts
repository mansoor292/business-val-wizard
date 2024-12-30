import { db } from '../src/lib/db';
import * as schema from '../src/lib/db/schema/base';

async function seed() {
  try {
    console.log('Seeding database...');

    // Create team members
    const [ceo, cto, productManager, developer] = await Promise.all([
      db.insert(schema.teamMembers).values({
        name: 'John Smith',
        role: 'CEO',
        email: 'john@example.com',
        department: 'Executive',
      }).returning(),
      db.insert(schema.teamMembers).values({
        name: 'Sarah Johnson',
        role: 'CTO',
        email: 'sarah@example.com',
        department: 'Engineering',
      }).returning(),
      db.insert(schema.teamMembers).values({
        name: 'Mike Brown',
        role: 'Product Manager',
        email: 'mike@example.com',
        department: 'Product',
      }).returning(),
      db.insert(schema.teamMembers).values({
        name: 'Emily Davis',
        role: 'Software Engineer',
        email: 'emily@example.com',
        department: 'Engineering',
      }).returning(),
    ]);

    // Create a project
    const [project] = await db.insert(schema.projects).values({
      name: 'Business Value Dashboard',
      description: 'A dashboard to track and visualize business value metrics',
      status: 'ACTIVE',
      startDate: new Date(),
      teamIds: [ceo[0].id.toString(), cto[0].id.toString(), productManager[0].id.toString(), developer[0].id.toString()],
    }).returning();

    // Create value propositions
    const [valueProposition] = await db.insert(schema.valuePropositions).values({
      title: 'Automated Value Tracking',
      description: 'Automatically track and measure business value metrics',
      impact: 'HIGH',
      effort: 'MEDIUM',
      confidence: 'HIGH',
    }).returning();

    // Create an initiative
    const [initiative] = await db.insert(schema.initiatives).values({
      title: 'Implement Value Tracking System',
      description: 'Build and deploy automated value tracking system',
      status: 'IN_PROGRESS', // This is correct for initiatives
      valuePropositionIds: [valueProposition.id],
      startDate: new Date(),
    }).returning();

    // Create metrics
    await db.insert(schema.metrics).values({
      name: 'User Engagement',
      description: 'Monthly active users',
      target: 10000,
      current: 5000,
      unit: 'users',
      trend: 'UP',
      initiativeId: initiative.id,
    });

    // Create tasks
    const [task] = await db.insert(schema.tasks).values({
      title: 'Design Value Dashboard',
      description: 'Create initial designs for the value tracking dashboard',
      status: 'IN_PROGRESS',
      priority: 'HIGH',
      projectId: project.id,
      assigneeId: developer[0].id,
    }).returning();

    // Create documents
    const [document] = await db.insert(schema.documents).values({
      title: 'Dashboard Requirements',
      content: 'Detailed requirements for the value tracking dashboard',
      type: 'DOCUMENTATION',
      projectId: project.id,
    }).returning();

    // Create comments
    await db.insert(schema.comments).values({
      content: 'Looking good! Let\'s review this in our next meeting.',
      projectId: project.id,
      taskId: task.id,
      documentId: document.id,
      authorId: productManager[0].id,
    });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

export { seed };
