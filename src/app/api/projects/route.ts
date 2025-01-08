import { NextResponse } from 'next/server';
import { Project } from '@/lib/data/interface';

// Mock storage for projects
let mockProjects: Project[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.description || !body.startDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new project
    const newProject: Project = {
      id: Math.random().toString(36).substring(7),
      name: body.name,
      description: body.description,
      startDate: new Date(body.startDate),
      endDate: body.endDate ? new Date(body.endDate) : undefined,
      status: body.status || 'ACTIVE',
      teamIds: body.teamIds || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // In a real app, you would save this to a database
    mockProjects.push(newProject);

    return NextResponse.json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // In a real app, you would fetch this from a database
    return NextResponse.json(mockProjects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
