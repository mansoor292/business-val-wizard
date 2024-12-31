'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_PROJECT_TASKS, GET_TASK, CREATE_TASK, UPDATE_TASK } from 'src/lib/graphql/queries/tasks';
import type { 
  GetProjectTasksQuery, 
  GetProjectTasksQueryVariables,
  GetTaskQuery,
  GetTaskQueryVariables,
  CreateTaskInput,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  UpdateTaskInput,
  UpdateTaskMutation,
  UpdateTaskMutationVariables
} from 'src/lib/graphql/generated/graphql';

export async function getProjectTasks() {
  const result = await executeGraphQL<GetProjectTasksQuery, GetProjectTasksQueryVariables>({
    query: GET_PROJECT_TASKS
  });
  return result.tasks || [];
}

export async function getTask(id: string) {
  const result = await executeGraphQL<GetTaskQuery, GetTaskQueryVariables>({
    query: GET_TASK,
    variables: { id }
  });
  return result.task;
}

export async function createTask(input: CreateTaskInput) {
  const result = await executeGraphQL<CreateTaskMutation, CreateTaskMutationVariables>({
    query: CREATE_TASK,
    variables: { input }
  });
  return result.createTask?.task;
}

export async function updateTask(input: UpdateTaskInput) {
  const result = await executeGraphQL<UpdateTaskMutation, UpdateTaskMutationVariables>({
    query: UPDATE_TASK,
    variables: { input }
  });
  return result.updateTask?.task;
}
