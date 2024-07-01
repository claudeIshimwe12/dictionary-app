# Dictionary Web App

This project is a dictionary web app, a user is able to search any word in english and the app will generate the meaning, some usecases as well as examples.

A user has the ability to change their prefered font, color theme (dark and light).

A user is able to play an audio for better pronounciation of the found word.

It is visually stunning on all devices from a small phone to a large HD screen.

Here is the hosted link https://dictionary-app-en.netlify.app/

# Vite React TypeScript Starter

This is a starter template for a Vite project with React and TypeScript. It includes the basic setup needed to start building a modern web application.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🟦 [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript
- 📏 [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- 💅 [Prettier](https://prettier.io/) - An opinionated code formatter
- 🧪 [Jest](https://jestjs.io/) - Delightful JavaScript Testing
- 🃏 [React Testing Library](https://testing-library.com/react) - Simple and complete testing utilities for React

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your development machine.

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/vite-react-ts-starter.git
   cd vite-react-ts-starter
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

````sh
npm run dev
# or
yarn dev


This project template was made out of Vite which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
````

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
