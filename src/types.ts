import { type Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";

export type BotContext = ConversationFlavor<Context>;
export type BotConversationContext = Context;

export type BotConversation = Conversation<BotContext, BotConversationContext>;
