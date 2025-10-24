import { type BotContext } from "../types";
import { prisma } from "../db";

export async function history(ctx: BotContext) {
  const user = await prisma.user.findUnique({
    where: { telegramId: BigInt(ctx.from!.id) },
  });

  if (!user) {
    await ctx.reply("You need to register first. Please type /start to begin.");
    return;
  }

  const attempts = await prisma.testAttempt.findMany({
    where: { userId: user.id },
    orderBy: { completedAt: "desc" },
    take: 5,
    include: { profession: true },
  });

  if (attempts.length === 0) {
    await ctx.reply("You have no completed tests yet. Start one with /test!");
    return;
  }

  let message = "Your Last 5 Test Attempts:\n\n";

  attempts.forEach((attempt, index) => {
    const date = attempt.completedAt.toLocaleDateString();
    const time = attempt.completedAt.toLocaleTimeString();
    message += `${index + 1}. Date: ${date} ${time}\n`;
    message += `Profession: ${attempt.profession.name}\n\n`;
  });

  await ctx.reply(message);
}
