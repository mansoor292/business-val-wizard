import { gql } from '../generated';

export const GET_CHATS = gql(`
  query GetChats {
    chats {
      id
      participantId
      participantType
      lastMessageAt
      status
    }
  }
`);

export const GET_CHAT_MESSAGES = gql(`
  query GetChatMessages {
    chatMessages {
      id
      chatId
      content
      sender
      timestamp
      metadata
    }
  }
`);

export const CREATE_CHAT = gql(`
  mutation CreateChat($input: CreateChatInput!) {
    createChat(input: $input) {
      chat {
        id
        participantId
        participantType
        lastMessageAt
        status
      }
    }
  }
`);

export const CREATE_CHAT_MESSAGE = gql(`
  mutation CreateChatMessage($input: CreateChatMessageInput!) {
    createChatMessage(input: $input) {
      chatMessage {
        id
        content
        sender
        timestamp
        metadata
      }
    }
  }
`);
