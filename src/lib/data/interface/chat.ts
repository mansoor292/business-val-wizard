import { z } from "zod";
import { BaseEntity } from "./base";

// Enums for type safety in code
export const enum ParticipantType {
  AGENT = 'AGENT',
  TEAM_MEMBER = 'TEAM_MEMBER'
}

export const enum ChatStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED'
}

// Participant can be either an Agent or a TeamMember
export const participantTypeSchema = z.string();
export type ParticipantTypeString = z.infer<typeof participantTypeSchema>;

// Chat Schema
export const chatSchema = z.object({
  participantId: z.string(), // ID of the agent or team member
  participantType: z.string(),
  lastMessageAt: z.date(),
  status: z.string(),
});

export type Chat = z.infer<typeof chatSchema> & BaseEntity;

export const enum MessageSender {
  USER = 'USER',
  PARTICIPANT = 'PARTICIPANT'
}

// Message Schema (unified for both agent and team member chats)
export const chatMessageSchema = z.object({
  chatId: z.string(),
  content: z.string(),
  sender: z.string(),
  timestamp: z.date(),
  metadata: z.record(z.any()).optional(), // For any additional data specific to agent or team member messages
});

export type ChatMessage = z.infer<typeof chatMessageSchema> & BaseEntity;

// Chat Filters
export interface ChatFilters {
  participantType?: ParticipantType;
  participantId?: string;
  status?: ChatStatus;
  searchTerm?: string;
}

// Message Filters
export interface ChatMessageFilters {
  chatId?: string;
  sender?: MessageSender;
  dateRange?: { start: Date; end: Date };
}
