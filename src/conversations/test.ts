import { type BotConversation, type BotConversationContext } from "../types";
import { type CallbackQueryContext, InlineKeyboard } from "grammy";
import { prisma } from "../db";

export async function test(
  conversation: BotConversation,
  ctx: BotConversationContext,
) {
  const user = await conversation.external(async () => {
    return await prisma.user.findUnique({
      where: { telegramId: BigInt(ctx.from!.id) },
    });
  });

  if (!user) {
    await ctx.reply("You need to register first. Please type /start to begin.");
    return;
  }

  const allProfessions = await conversation.external(async () => {
    return await prisma.profession.findMany();
  });

  if (allProfessions.length === 0) {
    await ctx.reply(
      "No professions are currently available. Please inform the administrator.",
    );
    return;
  }

  const questions = await conversation.external(async () => {
    return await prisma.question.findMany({
      include: {
        options: {
          orderBy: { order: "asc" },
        },
      },
      orderBy: { order: "asc" },
    });
  });

  if (questions.length === 0) {
    await ctx.reply(
      "No questions found for the test. Please inform the administrator.",
    );
    return;
  }

  await ctx.reply(
    "Starting the career test! Please answer the questions carefully.",
  );

  let currentQuestionIndex = 0;
  const userAnswers: { questionId: number; optionId: number }[] = [];

  let currentQuestion = questions[currentQuestionIndex];

  while (currentQuestion) {
    const keyboard = new InlineKeyboard();
    currentQuestion.options.forEach((option) => {
      keyboard
        .add({
          text: option.text,
          callback_data: `optionId-${option.id}`,
        })
        .row();
    });

    await ctx.reply(
      `Question ${currentQuestionIndex + 1}/${questions.length}:\n\n${currentQuestion.text}`,
      {
        reply_markup: keyboard,
      },
    );

    let isValidAnswer = false;
    let optionId: number;
    let answerCtx: CallbackQueryContext<BotConversationContext>;

    while (!isValidAnswer) {
      answerCtx = await conversation.waitForCallbackQuery(/optionId-\d+/);

      optionId = parseInt(answerCtx.callbackQuery.data.split("-")[1]);

      if (!currentQuestion.options.some((option) => option.id === optionId)) {
        await answerCtx.answerCallbackQuery(
          "Invalid choice. Please select one of the provided options for the current question.",
        );
      } else {
        isValidAnswer = true;

        userAnswers.push({
          questionId: currentQuestion.id,
          optionId: optionId,
        });

        await answerCtx.answerCallbackQuery("Answer recorded!");
      }
    }

    currentQuestionIndex++;
    currentQuestion = questions[currentQuestionIndex];
  }

  await ctx.reply("You have completed the test! Calculating your results...");

  const professionScores: { professionId: number; score: number }[] = [];

  allProfessions.forEach((prof) => {
    professionScores.push({
      professionId: prof.id,
      score: 0,
    });
  });

  const optionIds = userAnswers.map((answer) => answer.optionId);

  const optionEffects = await conversation.external(async () => {
    return await prisma.optionEffect.findMany({
      where: { optionId: { in: optionIds } },
    });
  });

  optionEffects.forEach((effect) => {
    const professionScore = professionScores.find(
      (profession) => profession.professionId === effect.professionId,
    );
    if (professionScore) {
      professionScore.score += effect.score;
    }
  });

  const finalProfession = professionScores.reduce((maxProf, current) => {
    return current.score > maxProf.score ? current : maxProf;
  }, professionScores[0]);

  if (finalProfession.score === 0) {
    await ctx.reply(
      "Could not determine a matching profession. Please inform the administator.",
    );
    return;
  }

  const testAttempt = await conversation.external(async () => {
    return await prisma.testAttempt.create({
      data: {
        userId: user.id,
        professionId: finalProfession.professionId,
        answers: {
          createMany: {
            data: userAnswers.map((answer) => ({ optionId: answer.optionId })),
          },
        },
      },
      include: {
        profession: true,
      },
    });
  });

  await ctx.reply(
    `Based on your answers, your best match is: ${testAttempt.profession.name}\n\n${testAttempt.profession.description}`,
  );
}
