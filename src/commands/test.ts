import { type BotContext } from "../types";

export async function test(ctx: BotContext) {
  await ctx.conversation.enter("test");
}
