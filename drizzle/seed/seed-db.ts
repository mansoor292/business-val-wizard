import { sql } from 'drizzle-orm';
import { getDatabase } from '../db';
import * as schema from '../schema';
import { enumKpiCharpStatus } from '../schema';
import manufacturingData from './manufacturing-seed.json';

export async function seedManufacturing() {
  try {
    console.log('Seeding manufacturing data...');
    const db = await getDatabase();

    await db.transaction(async (tx) => {
      console.log('Starting transaction...');
      // Maps to store created records and their IDs
    const industryMap = new Map();
    const orgMap = new Map();
    const deptMap = new Map();
    const roleMap = new Map();
    const userMap = new Map();
    const projectMap = new Map();
    const kpiMap = new Map();
    const standardKpiMap = new Map();
    const meetingMap = new Map();

    // 1. Create Industry
    for (const ind of manufacturingData.industry) {
      const [created] = await tx.insert(schema.industry).values({
        industryId: ind.industryId,
        industryName: ind.industryName,
        createdAt: new Date(ind.createdAt).toISOString(),
        updatedAt: new Date(ind.updatedAt).toISOString()
      }).returning();
      industryMap.set(ind.industryId, created);
    }

    // 2. Create Organization
    for (const org of manufacturingData.organization) {
      const [created] = await tx.insert(schema.organization).values({
        orgId: org.orgId,
        orgName: org.orgName,
        address: org.address,
        city: org.city,
        email: org.email,
        phoneNumber: org.phoneNumber,
        mission: org.mission,
        vision: org.vision,
        values: org.values,
        industryId: industryMap.get(org.industryId)?.industryId,
        isStartup: org.isStartup,
        createdAt: new Date(org.createdAt).toISOString(),
        updatedAt: new Date(org.updatedAt).toISOString()
      }).returning();
      orgMap.set(org.orgId, created);
    }

    // 3. Create Departments
    for (const dept of manufacturingData.department) {
      const [created] = await tx.insert(schema.department).values({
        depId: dept.depId,
        deptName: dept.deptName,
        orgId: orgMap.get(dept.orgId)?.orgId,
        createdAt: new Date(dept.createdAt).toISOString(),
        updatedAt: new Date(dept.updatedAt).toISOString()
      }).returning();
      deptMap.set(dept.depId, created);
    }

    // 4. Create Roles
    for (const role of manufacturingData.role) {
      const [created] = await tx.insert(schema.role).values({
        rId: role.rId,
        roleName: role.roleName,
        leval: role.leval,
        depId: deptMap.get(role.depId)?.depId,
        createdAt: new Date(role.createdAt).toISOString(),
        updatedAt: new Date(role.updatedAt).toISOString()
      }).returning();
      roleMap.set(role.rId, created);
    }

    // 5. Create Users (first pass - create without managers)
    const userIdMap = new Map(); // Maps original IDs to new IDs
    
    for (const user of manufacturingData.users) {
      const [created] = await tx.insert(schema.users).values({
        uId: user.uId,
        name: user.name,
        lname: user.lname,
        email: user.email,
        rId: roleMap.get(user.rId)?.rId,
        depId: deptMap.get(user.depId)?.depId,
        phoneNumber: user.phoneNumber,
        skills: user.skills,
        avatar: user.avatar,
        managerUserId: null, // Initially set to null
        createdAt: new Date(user.createdAt).toISOString(),
        updatedAt: new Date(user.updatedAt).toISOString()
      }).returning();
      userMap.set(user.uId, created);
      userIdMap.set(user.uId, created.uId);
    }

    // Second pass - update manager IDs
    for (const user of manufacturingData.users) {
      if (user.managerUserId) {
        await tx.update(schema.users)
          .set({ managerUserId: userIdMap.get(user.managerUserId) })
          .where(sql`${schema.users.uId} = ${user.uId}`);
      }
    }

    // 6. Create Standard KPIs
    for (const kpi of manufacturingData.standardKpi) {
      const [created] = await tx.insert(schema.standardKpi).values({
        standardKpiId: kpi.standardKpiId,
        unit: kpi.unit,
        objective: kpi.objective,
        target: kpi.target,
        reportingFrequency: kpi.reportingFrequency,
        industry: kpi.industry,
        isCorporateKpi: kpi.isCorporateKpi,
        level: kpi.level,
        kpiType: kpi.kpiType,
        performanceDirection: kpi.performanceDirection,
        createdAt: new Date(kpi.createdAt).toISOString(),
        updatedAt: new Date(kpi.updatedAt).toISOString()
      }).returning();
      standardKpiMap.set(kpi.standardKpiId, created);
    }

    // 7. Create KPIs
    for (const kpi of manufacturingData.kpi) {
      const [created] = await tx.insert(schema.kpi).values({
        kpiId: kpi.kpiId,
        unit: kpi.unit,
        objective: kpi.objective,
        charpStatus: kpi.charpStatus as typeof enumKpiCharpStatus.enumValues[number],
        uId: userMap.get(kpi.uId)?.uId,
        isCorporateKpi: kpi.isCorporateKpi,
        performanceDirection: kpi.performanceDirection,
        standardKpiId: standardKpiMap.get(kpi.standardKpiId)?.standardKpiId,
        kpiType: kpi.kpiType,
        createdAt: new Date(kpi.createdAt).toISOString(),
        updatedAt: new Date(kpi.updatedAt).toISOString()
      }).returning();
      kpiMap.set(kpi.kpiId, created);
    }

    // 8. Create KPI History
    for (const hist of manufacturingData.kpiHistory) {
      await tx.insert(schema.kpiHistory).values({
        kpiHistoryId: hist.kpiHistoryId,
        kpiId: kpiMap.get(hist.kpiId)?.kpiId,
        metricType: hist.metricType,
        amount: hist.amount,
        frequency: hist.frequency,
        reportDate: new Date(hist.reportDate).toISOString(),
        actualAmount: hist.actualAmount,
        createdAt: new Date(hist.createdAt).toISOString(),
        updatedAt: new Date(hist.updatedAt).toISOString()
      });
    }

    // 9. Create Projects
    for (const project of manufacturingData.projects) {
      const [created] = await tx.insert(schema.projects).values({
        id: project.id,
        name: project.name,
        description: project.description,
        status: project.status,
        startDate: new Date(project.startDate).toISOString(),
        endDate: project.endDate ? new Date(project.endDate).toISOString() : null,
        teamIds: project.teamIds,
        orgId: orgMap.get(project.orgId)?.orgId,
        createdAt: new Date(project.createdAt).toISOString(),
        updatedAt: new Date(project.updatedAt).toISOString()
      }).returning();
      projectMap.set(project.id, created);
    }

    // 10. Create Tasks
    for (const task of manufacturingData.tasks) {
      await tx.insert(schema.tasks).values({
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        assigneeId: userMap.get(task.assigneeId)?.uId,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : null,
        priority: task.priority,
        projectId: projectMap.get(task.projectId)?.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    // 11. Create Meetings
    for (const meeting of manufacturingData.meeting) {
      const [created] = await tx.insert(schema.meeting).values({
        meetingId: meeting.meetingId,
        meetingName: meeting.meetingName,
        meetingFrequency: meeting.meetingFrequency,
        uId: userMap.get(meeting.uId)?.uId,
        meetingDate: new Date(meeting.meetingDate).toISOString(),
        meetingInterval: meeting.meetingInterval,
        createdAt: new Date(meeting.createdAt).toISOString(),
        updatedAt: new Date(meeting.updatedAt).toISOString()
      }).returning();
      meetingMap.set(meeting.meetingId, created);
    }

    // 12. Create Meeting Users
    for (const meetUser of manufacturingData.meetingUser) {
      await tx.insert(schema.meetingUser).values({
        meetingUserId: meetUser.meetingUserId,
        meetingId: meetingMap.get(meetUser.meetingId)?.meetingId,
        uId: userMap.get(meetUser.uId)?.uId,
        userRole: meetUser.userRole,
        createdAt: new Date(meetUser.createdAt).toISOString(),
        updatedAt: new Date(meetUser.updatedAt).toISOString()
      });
    }

    // 13. Create Chats
    for (const chat of manufacturingData.chats) {
      const [created] = await tx.insert(schema.chats).values({
        id: chat.id,
        participantId: userMap.get(chat.participantId)?.uId,
        participantType: chat.participantType,
        lastMessageAt: new Date(chat.lastMessageAt).toISOString(),
        status: chat.status,
        createdAt: new Date(chat.createdAt).toISOString(),
        updatedAt: new Date(chat.updatedAt).toISOString()
      }).returning();

      // 14. Create Chat Messages for this chat
      const messages = manufacturingData.chatMessages.filter(msg => msg.chatId === chat.id);
      for (const msg of messages) {
        await tx.insert(schema.chatMessages).values({
          id: msg.id,
          chatId: created.id,
          content: msg.content,
          sender: userMap.get(msg.sender)?.uId,
          timestamp: new Date(msg.timestamp).toISOString(),
          createdAt: new Date(msg.createdAt).toISOString(),
          updatedAt: new Date(msg.updatedAt).toISOString()
        });
      }
    }

      console.log('Manufacturing data seeded successfully!');
    });
  } catch (error) {
    console.error('Error seeding manufacturing data:', error);
    console.log('Transaction rolled back.');
    throw error;
  }
}
