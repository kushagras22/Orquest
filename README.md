# Orquest

Orquest is a modern, full-stack web application starter built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. It features a robust architecture designed for scalability and developer experience, integrating type-safe APIs, secure authentication, and a powerful ORM.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via [Prisma](https://www.prisma.io/) & [Neon Adapter](https://neon.tech/))
- **Authentication:** [Better Auth](https://better-auth.com/)
- **API:** [tRPC v11](https://trpc.io/)
- **State Management:** [TanStack Query](https://tanstack.com/query/latest)
- **Validation:** [Zod](https://zod.dev/)
- **Linting & Formatting:** [Biome](https://biomejs.dev/)
- **UI Components:** Built with [Radix UI](https://www.radix-ui.com/) primitives and [Lucide React](https://lucide.dev/) icons.

## ✨ Features

- **Authentication:** Secure user authentication flow (Login, Register, Logout) powered by Better Auth.
- **Type-Safe API:** End-to-end type safety with tRPC.
- **Database Management:** Schema-first database modeling with Prisma.
- **Modern Styling:** Utility-first CSS with Tailwind v4 and modern component primitives.
- **Code Quality:** Enforced linting and formatting standards using Biome.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: v20 or higher recommended.
- **Package Manager**: npm, yarn, pnpm, or bun.
- **Database**: A PostgreSQL database (e.g., local instance or [Neon](https://neon.tech/)).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/orquest.git
    cd orquest
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root directory and configure the following variables:

    ```env
    # Database Connection
    DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

    # Authentication (Better Auth)
    BETTER_AUTH_SECRET="your-secure-random-secret"
    BETTER_AUTH_URL="http://localhost:3000" # Base URL of your app
    ```

4.  **Database Setup:**

    Generate the Prisma client and push the schema to your database:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Scripts

- `npm run dev`: Starts the development server with Turbopack (`next dev --turbopack`).
- `npm run build`: Builds the application for production (`next build --turbopack`).
- `npm run start`: Starts the production server.
- `npm run lint`: Runs Biome to check for linting errors.
- `npm run format`: Formats code using Biome.

## 📂 Project Structure

```
├── src
│   ├── app          # Next.js App Router pages and layouts
│   ├── components   # Reusable UI components
│   ├── features     # Feature-based modules (e.g., auth)
│   ├── hooks        # Custom React hooks
│   ├── lib          # Utility functions and libraries
│   └── trpc         # tRPC client and server configuration
├── prisma           # Database schema and migrations
├── public           # Static assets
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1.  **Fork** the repository.
2.  Create a new **branch** feature or fix (`git checkout -b feature/amazing-feature`).
3.  **Commit** your changes.
4.  Ensure code quality by running formatting and linting:
    ```bash
    npm run format
    npm run lint
    ```
5.  **Push** to the branch (`git push origin feature/amazing-feature`).
6.  Open a **Pull Request**.

## 📄 License

[MIT](LICENSE)
