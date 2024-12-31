//@ts-ignore
import { db } from '../src/lib/data/implementations/drizzle/db';
import manufacturingData from '../src/lib/data/implementations/drizzle/seed/manufacturing.json';
import * as schema from '../src/lib/data/implementations/drizzle/schema/schema';
import { eq } from 'drizzle-orm';

export async function seedManufacturing() {
  try {
    console.log('Seeding manufacturing data...');

    // Create team members first since they're referenced by other entities
    const teamMembers = await Promise.all(
      manufacturingData.teamMembers.map(member =>
        db.insert(schema.teamMembers)
          .values({
            name: member.name,
            role: member.role,
            email: member.email,
            avatar: member.avatar || null,
            skills: member.skills || [],
            department: member.department,
          })
          .returning()
      )
    );

    // Update reporting relationships
    for (let i = 0; i < manufacturingData.teamMembers.length; i++) {
      const member = manufacturingData.teamMembers[i];
      if (member.reportsTo) {
        await db
          .update(schema.teamMembers)
          .set({ reportsTo: teamMembers[parseInt(member.reportsTo) - 1][0].id })
          .where(eq(schema.teamMembers.id, teamMembers[i][0].id));
      }
    }

    // Create value propositions
    const valuePropositions = await Promise.all(
      manufacturingData.valuePropositions.map(vp =>
        db.insert(schema.valuePropositions)
          .values({
            title: vp.title,
            description: vp.description,
            impact: vp.impact,
            effort: vp.effort,
            confidence: vp.confidence,
          })
          .returning()
      )
    );

    // Create initiatives
    const initiatives = await Promise.all(
      manufacturingData.initiatives.map(initiative =>
        db.insert(schema.initiatives)
          .values({
            title: initiative.title,
            description: initiative.description,
            status: initiative.status,
            startDate: new Date(initiative.startDate),
            endDate: initiative.endDate ? new Date(initiative.endDate) : null,
            valuePropositionIds: initiative.valuePropositionIds.map(
              id => valuePropositions[parseInt(id) - 1][0].id
            ),
          })
          .returning()
      )
    );

    // Create metrics
    await Promise.all(
      manufacturingData.metrics.map(metric =>
        db.insert(schema.metrics)
          .values({
            name: metric.name,
            description: metric.description,
            target: metric.target,
            current: metric.current,
            unit: metric.unit,
            initiativeId: initiatives[parseInt(metric.initiativeId) - 1][0].id,
            trend: metric.trend,
          })
          .returning()
      )
    );

    // Create projects
    const projects = await Promise.all(
      manufacturingData.projects.map(project =>
        db.insert(schema.projects)
          .values({
            name: project.name,
            description: project.description,
            status: project.status,
            startDate: new Date(project.startDate),
            endDate: project.endDate ? new Date(project.endDate) : null,
            teamIds: project.teamIds.map(id => teamMembers[parseInt(id) - 1][0].id.toString()),
          })
          .returning()
      )
    );

    // Create tasks
    const tasks = await Promise.all(
      manufacturingData.tasks.map(task =>
        db.insert(schema.tasks)
          .values({
            title: task.title,
            description: task.description,
            status: task.status,
            assigneeId: teamMembers[parseInt(task.assigneeId) - 1][0].id,
            dueDate: task.dueDate ? new Date(task.dueDate) : null,
            priority: task.priority,
            projectId: projects[parseInt(task.projectId) - 1][0].id,
          })
          .returning()
      )
    );

    // Create documents
    const documents = await Promise.all(
      manufacturingData.documents.map(doc =>
        db.insert(schema.documents)
          .values({
            title: doc.title,
            content: doc.content,
            type: doc.type,
            projectId: projects[parseInt(doc.projectId) - 1][0].id,
          })
          .returning()
      )
    );

    // Create comments
    await Promise.all(
      manufacturingData.comments.map(comment => {
        const commentData = {
          content: comment.content,
          authorId: teamMembers[parseInt(comment.authorId) - 1][0].id,
          projectId: projects[parseInt(comment.projectId) - 1][0].id,
          taskId: comment.taskId ? tasks[parseInt(comment.taskId) - 1][0].id : undefined,
        };

        return db.insert(schema.comments)
          .values(commentData)
          .returning();
      })
    );

    console.log('Manufacturing data seeded successfully!');
  } catch (error) {
    console.error('Error seeding manufacturing data:', error);
    throw error;
  }
}
