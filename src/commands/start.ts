import { type BotContext } from "../types";

export async function start(ctx: BotContext) {
  await ctx.conversation.enter("registration");
}
