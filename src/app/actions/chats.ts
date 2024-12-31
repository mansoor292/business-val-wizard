'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_CHATS, GET_CHAT_MESSAGES, CREATE_CHAT, CREATE_CHAT_MESSAGE } from 'src/lib/graphql/queries/chats';
import type { 
  GetChatsQuery, 
  GetChatsQueryVariables,
  GetChatMessagesQuery,
  GetChatMessagesQueryVariables,
  CreateChatInput,
  CreateChatMutation,
  CreateChatMutationVariables,
  CreateChatMessageInput,
  CreateChatMessageMutation,
  CreateChatMessageMutationVariables
} from 'src/lib/graphql/generated/graphql';

export async function getChats() {
  const result = await executeGraphQL<GetChatsQuery, GetChatsQueryVariables>({
    query: GET_CHATS
  });
  return result.chats || [];
}

export async function getChatMessages() {
  const result = await executeGraphQL<GetChatMessagesQuery, GetChatMessagesQueryVariables>({
    query: GET_CHAT_MESSAGES
  });
  return result.chatMessages || [];
}

export async function createChat(input: CreateChatInput) {
  const result = await executeGraphQL<CreateChatMutation, CreateChatMutationVariables>({
    query: CREATE_CHAT,
    variables: { input }
  });
  return result.createChat?.chat;
}

export async function createChatMessage(input: CreateChatMessageInput) {
  const result = await executeGraphQL<CreateChatMessageMutation, CreateChatMessageMutationVariables>({
    query: CREATE_CHAT_MESSAGE,
    variables: { input }
  });
  return result.createChatMessage?.chatMessage;
}
