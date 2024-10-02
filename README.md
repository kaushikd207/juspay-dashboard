# Project Setup: React + Vite + Tailwind + Framer Motion

This guide will help you install and run a React project using Vite, with additional packages including Tailwind CSS, Framer Motion, and ESLint configuration.

### Hosted URL:

- https://byewind-dashboard-tanmay.vercel.app/

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/sirtanmay/byewind-dashboard.git
cd byewind-dashboard
```

### 2. Install Dependencies

Run the following command to install all necessary packages:

```bash
npm install
```

Alternatively, you can use Yarn:

```bash
yarn install
```

### 3. Run the Development Server

To start the Vite development server with hot module replacement (HMR), use the following command:

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

The development server should start at `http://localhost:5173`.

### 4. Build the Project

To build the project for production, run:

```bash
npm run build
```

or with Yarn:

```bash
yarn build
```

### 5. Preview the Production Build

To preview the production build, you can use:

```bash
npm run preview
```

or with Yarn:

```bash
yarn preview
```

## Tailwind CSS Integration

This project includes [Tailwind CSS](https://tailwindcss.com/) for styling. It is already configured with `postcss` and `autoprefixer`. To make changes to the design, modify the `tailwind.config.js` file.

Tailwind is applied to all components using utility-first CSS, allowing for rapid UI development.

## Framer Motion

Framer Motion is used for animations. You can easily add animations to your components by importing `motion` from `framer-motion` and wrapping your components.

Example:

```jsx
import { motion } from "framer-motion";

const Component = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 1 }}
	>
		Hello, World!
	</motion.div>
);
```

## ESLint Configuration

The project includes [ESLint](https://eslint.org/) with the following plugins:

- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

The ESLint configuration is located in `.eslintrc` and helps maintain code quality. Ensure to run the linter before pushing changes:

```bash
npm run lint
```

or with Yarn:

```bash
yarn lint
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase with ESLint.

## Additional Configuration

- **Vite Plugin React**: For fast refresh and optimized builds using Vite.
- **PostCSS and Autoprefixer**: Configured for cross-browser compatibility.
# juspay-dashboard
