# Telegram Career Test Bot

Telegram bot designed to help users identify a suitable profession by taking an interactive test.

The bot registers users, guides them through a series of questions, analyzes their answers, and suggests a career path. It also keeps a history of the user's previous attempts.

## Features

-   **User Registration**: A simple and mandatory registration process to collect the user's first name, last name, and phone number.
-   **Interactive Quiz**: Users can take a test consisting of multiple-choice questions. Questions and answers are fetched from a database.
-   **Profession Recommendation**: A logic-based algorithm analyzes the user's answers to determine the most suitable profession.
-   **Result Display**: Upon completing the test, the user receives a recommendation for a profession along with a brief description.
-   **Test History**: Users can view the results of their previous test attempts.

## Technologies

-   **Language**: TypeScript
-   **Bot Framework**: grammY
    -    `@grammyjs/conversations` is used to manage multi-step interactions like registration and the quiz.
-   **Database ORM**: Prisma
-   **Database**: PostgreSQL
-   **Runtime**: Node.js

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

-   Node.js (v22 or higher)
-   npm (or another package manager)
-   Telegram Bot Token (obtained from BotFather)
-   PostgreSQL instance

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/timeFreeze0/career-test-bot.git
    cd career-test-bot
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    -   Create a `.env` file from the example:
        ```sh
        cp .env.example .env
        ```
    -   Open the `.env` file and add your configuration:
        ```ini
        DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
        BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN"
        ```

4.  **Set up the database:**
    -   Apply the database migrations to create the necessary tables:
        ```sh
        npm run prisma:migrate
        ```

5.  **Run the bot:**
    -   To run in development mode with hot-reloading:
        ```sh
        npm run dev
        ```
    -   To build and run for production:
        ```sh
        npm run build
        npm run start
        ```

## Project Structure

```
.
├── dist/                   # Compiled JavaScript output
├── node_modules/           # Project dependencies
├── prisma/                 # Prisma configuration
│   ├── migrations/         # Database migration history
│   ├── schema.prisma       # Databse schema definition
│   └── seed.ts             # Script to seed the database with initial data
├── src/                    # Source code
│   ├── commands/           # Logic for bot commands (e.g., /start, /history)
│   │   ├── history.ts
│   │   ├── index.ts
│   │   ├── start.ts
│   │   └── test.ts
│   ├── conversations/      # Logic for multi-step conversations
│   │   ├── index.ts
│   │   ├── registration.ts
│   │   └── test.ts
│   ├── generated/          # Auto-generated files (e.g., Prisma Client)
│   ├── db.ts               # Prisma Client initialization
│   ├── index.ts            # Main application entry point
│   └── types.ts            # Custom types
├── .env.example            # Example environment variables file
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── eslint.config.mjs       # ESLint configuration
├── package-lock.json       # Exact versions of dependencies
├── package.json            # Project metadata and dependencies
├── prisma.config.ts        # Prisma configuration
└── tsconfig.json           # TypeScript compiler configuration
```

## Available Scripts

| Script Name | Command | Description |
| :--- | :--- | :--- |
| `dev` | `tsx watch src/index.ts` | Start the bot in development mode with `tsx` and hot-reloading. |
| `start` | `node dist/index.js` | Start the compiled production build. |
| `build` | `tsc` | Compile TypeScript to JavaScript. |
| `typecheck` | `tsc --noEmit` | Check TypeScript types without compiling. |
| `lint` | `eslint . --ext .ts` | Lint the codebase using ESLint. |
| `lint:fix` | `eslint . --ext .ts --fix` | Automatically fix linting errors. |
| `format` | `prettier --check .` | Check for code formatting issues with Prettier. |
| `format:fix` | `prettier --write .` | Automatically format code with Prettier. |
| `prisma:generate` | `prisma generate` | Generate the Prisma Client based on your schema. |
| `prisma:migrate` | `prisma migrate dev` | Apply pending database migrations. |
| `prisma:reset` | `prisma migrate reset` | Reset the database and apply migrations. |
| `prisma:seed` | `prisma db seed` | Populate the database with initial data using `seed.ts`. |
| `prisma:dev` | `prisma dev` | Start the local Prisma development server. |
