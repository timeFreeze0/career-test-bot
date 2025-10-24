import { type BotConversation, type BotConversationContext } from "../types";
import { Keyboard } from "grammy";
import { prisma } from "../db";

export async function registration(
  conversation: BotConversation,
  ctx: BotConversationContext
) {
  const user = await conversation.external(async () => {
    return await prisma.user.findUnique({
      where: { telegramId: BigInt(ctx.from!.id) },
    });
  });

  if (user) {
    await ctx.reply(
      `Welcome back, ${user.firstName}! You are already registered.`
    );
    return;
  }

  await ctx.reply(
    "Welcome! Let's get you registered. First, what is your first name?"
  );

  const firstNameCtx = await conversation.waitFor("message:text", {
    otherwise: (ctx) =>
      ctx.reply("Invalid input. Please send a message with your first name."),
  });
  const firstName = firstNameCtx.message.text;

  await ctx.reply("Thanks! Now, what is your last name?");

  const lastNameCtx = await conversation.waitFor("message:text", {
    otherwise: (ctx) =>
      ctx.reply("Invalid input. Please send a message with your last name."),
  });
  const lastName = lastNameCtx.message.text;

  const keyboard = new Keyboard().requestContact("Share Phone Number");
  await ctx.reply(
    "Finally, please share your phone number by using the button below.",
    {
      reply_markup: keyboard,
    }
  );

  const phoneCtx = await conversation.waitFor("message:contact", {
    otherwise: (ctx) =>
      ctx.reply(
        "Invalid input. Please share your phone number by using the button below."
      ),
  });
  const phoneNumber = phoneCtx.message.contact.phone_number;

  const newUser = await conversation.external(async () => {
    return await prisma.user.create({
      data: {
        telegramId: BigInt(ctx.from!.id),
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      },
    });
  });

  await ctx.reply(
    `You're all set, ${newUser.firstName}! Welcome to the Career Test Bot.\n\nYou can now use /test to start a career test or /history to view your past results.`,
    {
      reply_markup: { remove_keyboard: true },
    }
  );
}
