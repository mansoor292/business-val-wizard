import { gql } from '../generated';

export const GET_PROJECT_TASKS = gql(`
  query GetProjectTasks {
    tasks {
      id
      title
      description
      status
      assigneeId
      dueDate
      priority
      projectId
    }
  }
`);

export const GET_TASK = gql(`
  query GetTask($id: UUID!) {
    task(id: $id) {
      id
      title
      description
      status
      assigneeId
      dueDate
      priority
      projectId
    }
  }
`);

export const CREATE_TASK = gql(`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      task {
        id
        title
        description
        status
        assigneeId
        dueDate
        priority
        projectId
      }
    }
  }
`);

export const UPDATE_TASK = gql(`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      task {
        id
        title
        description
        status
        assigneeId
        dueDate
        priority
        projectId
      }
    }
  }
`);
