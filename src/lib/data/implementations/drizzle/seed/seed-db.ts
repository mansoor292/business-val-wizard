import manufacturingData from './manufacturing.json';
import { DrizzleAdapter } from '../drizzle-adapter';

export async function seedManufacturing(adapter: DrizzleAdapter) {
  try {
    console.log('Seeding manufacturing data...');

    // Create team members first without reporting relationships
    const teamMembersByEmail = new Map();
    const teamMembers = await Promise.all(
      manufacturingData.teamMembers.map(async member => {
        const created = await adapter.createTeamMember({
          name: member.name,
          role: member.role,
          email: member.email,
          avatar: member.avatar || undefined,
          skills: member.skills || [],
          department: member.department,
          reportsTo: null // Initially no reporting relationships
        });
        teamMembersByEmail.set(member.email, created);
        return created;
      })
    );

    // Update reporting relationships using the created team members
    await Promise.all(
      manufacturingData.teamMembers.map(async member => {
        if (member.reportsTo) {
          const teamMember = teamMembersByEmail.get(member.email);
          const manager = teamMembersByEmail.get(member.reportsTo);
          if (teamMember && manager) {
            await adapter.updateTeamMember(teamMember.id, {
              reportsTo: manager.id
            });
          }
        }
      })
    );

    // Create value propositions
    const valuePropositions = await Promise.all(
      manufacturingData.valuePropositions.map(vp =>
        adapter.createValueProposition({
          title: vp.title,
          description: vp.description,
          impact: vp.impact,
          effort: vp.effort,
          confidence: vp.confidence,
        })
      )
    );

    // Create initiatives
    const initiatives = await Promise.all(
      manufacturingData.initiatives.map(initiative =>
        adapter.createInitiative({
          title: initiative.title,
          description: initiative.description,
          status: initiative.status,
          startDate: new Date(initiative.startDate),
          endDate: initiative.endDate ? new Date(initiative.endDate) : undefined,
          valuePropositionIds: initiative.valuePropositionIds.map(
            (_, index) => valuePropositions[index].id
          ),
        })
      )
    );

    // Create metrics
    await Promise.all(
      manufacturingData.metrics.map(metric =>
        adapter.createMetric({
          name: metric.name,
          description: metric.description,
          target: metric.target,
          current: metric.current,
          unit: metric.unit,
          initiativeId: initiatives[0].id,
          trend: metric.trend,
        })
      )
    );

    // Create projects
    const projects = await Promise.all(
      manufacturingData.projects.map(project =>
        adapter.createProject({
          name: project.name,
          description: project.description,
          status: project.status,
          startDate: new Date(project.startDate),
          endDate: project.endDate ? new Date(project.endDate) : undefined,
          teamIds: project.teamIds.map(email => teamMembersByEmail.get(email).id),
        })
      )
    );

    // Create tasks
    const tasks = await Promise.all(
      manufacturingData.tasks.map(task =>
        adapter.createTask({
          title: task.title,
          description: task.description,
          status: task.status,
          assigneeId: teamMembersByEmail.get(task.assigneeId).id,
          dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
          priority: task.priority,
          projectId: projects[0].id,
        })
      )
    );

    // Create documents
    const documents = await Promise.all(
      manufacturingData.documents.map(doc =>
        adapter.createDocument({
          title: doc.title,
          content: doc.content,
          type: doc.type,
          projectId: projects[0].id,
        })
      )
    );

    // Create comments
    await Promise.all(
      manufacturingData.comments.map(comment =>
        adapter.createComment({
          content: comment.content,
          authorId: teamMembersByEmail.get(comment.authorId).id,
          projectId: projects[0].id,
          taskId: comment.taskId ? tasks[0].id : undefined,
        })
      )
    );

    console.log('Manufacturing data seeded successfully!');
  } catch (error) {
    console.error('Error seeding manufacturing data:', error);
    throw error;
  }
}
