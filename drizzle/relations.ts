import { relations } from "drizzle-orm/relations";
import { chats, chatMessages } from "./schema";

export const chatMessagesRelations = relations(chatMessages, ({one}) => ({
	chat: one(chats, {
		fields: [chatMessages.chatId],
		references: [chats.id]
	}),
}));

export const chatsRelations = relations(chats, ({many}) => ({
	chatMessages: many(chatMessages),
}));