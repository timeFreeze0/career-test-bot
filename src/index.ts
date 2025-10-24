import "dotenv/config";
import { Bot, GrammyError, HttpError } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { type BotContext } from "./types";
import {
  start as startCommand,
  test as testCommand,
  history as historyCommand,
} from "./commands";
import {
  test as testConversation,
  registration as registrationConversation,
} from "./conversations";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) throw new Error("BOT_TOKEN is not defined");

export const bot = new Bot<BotContext>(BOT_TOKEN);
bot.use(conversations());

bot.use(createConversation(registrationConversation));
bot.use(createConversation(testConversation));

bot.command("start", startCommand);
bot.command("test", testCommand);
bot.command("history", historyCommand);

async function configureBot() {
  await bot.api.setMyCommands([
    {
      command: "start",
      description: "Start the bot and register your user profile.",
    },
    { command: "test", description: "Begin the career aptitude test." },
    {
      command: "history",
      description: "View your last five completed test results.",
    },
  ]);
}

configureBot();

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});

bot.start({
    onStart: (me) => {
      console.log(`Bot @${me.username} started successfully!`);
    },
});    