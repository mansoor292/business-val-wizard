import { z } from "zod";
import { BaseEntity } from "../types";

// Participant can be either an Agent or a TeamMember
export const participantTypeSchema = z.enum(['AGENT', 'TEAM_MEMBER']);
export type ParticipantType = z.infer<typeof participantTypeSchema>;

// Chat Schema
export const chatSchema = z.object({
  participantId: z.string(), // ID of the agent or team member
  participantType: participantTypeSchema,
  lastMessageAt: z.date(),
  status: z.enum(['ACTIVE', 'ARCHIVED']),
});

export type Chat = z.infer<typeof chatSchema> & BaseEntity;

// Message Schema (unified for both agent and team member chats)
export const messageSchema = z.object({
  chatId: z.string(),
  content: z.string(),
  sender: z.enum(['USER', 'PARTICIPANT']),
  timestamp: z.date(),
  metadata: z.record(z.any()).optional(), // For any additional data specific to agent or team member messages
});

export type Message = z.infer<typeof messageSchema> & BaseEntity;

// Chat Filters
export interface ChatFilters {
  participantType?: ParticipantType;
  participantId?: string;
  status?: Chat['status'];
  searchTerm?: string;
}

// Message Filters
export interface MessageFilters {
  chatId?: string;
  sender?: Message['sender'];
  dateRange?: { start: Date; end: Date };
}
