# React Foundation

A hands-on collection of React.js learning projects built with Vite. This repository is a study-oriented playground covering core React concepts, routing, context, state management, and small UI experiments.

Each folder is a separate mini-project and can be run independently. The goal is to practice React fundamentals through small, focused examples rather than a single monolithic application.

## Repository structure

```text
React-Foundation/
├── 1_React-playground/         React fundamentals and component basics
├── 2_React-playground/         React Router navigation concepts
├── 3_React-Router/             Router-based UI with nested routes and loaders
├── 4_React-YT/                 Small React projects and UI widgets
├── 5_Context-Api/              Context API basics
├── 6_Context-Api/              Theme/auth context examples
├── 7_Context-Api/              Context provider patterns
├── 8_Context-Api/              Theme toggling with context
├── 9_TodoContext/              Todo app using context + localStorage
├── .vscode/                    Editor settings
└── README.md                   Project overview
```

## What is included

### 1_React-playground
- Basic React + Vite setup
- JSX and component foundations
- useState and useEffect examples
- Introductory notes and code samples for React basics

### 2_React-playground
- Small routing examples
- Navbar and page navigation patterns
- Basic route-driven app structure

### 3_React-Router
- Modern React Router setup using `createBrowserRouter`
- Nested routes and `Outlet`
- Route loaders and dynamic route parameters such as `/user/:id`
- Header/footer layout with route-based content swapping

### 4_React-YT
- Small project-style components
- Background changer
- Password generator
- Currency converter
- Reusable hooks and UI pieces

### 5-8_Context-Api
- Context API experiments
- Auth/theme state sharing
- Provider patterns
- Component-level access to shared state
- Live Demo: https://react-foundation-alpha.vercel.app/

### 9_TodoContext
- Todo application built with React Context
- Add, edit, delete, and toggle tasks
- Persistence using `localStorage`
- Clean separation of UI and state logic
- Live Demo: https://todoweb-drab.vercel.app/

## Tech stack

- React 19
- Vite
- JavaScript (JSX)
- CSS for styling
- React Router for navigation examples
- Tailwind CSS in several modules

## Prerequisites

- Node.js 18+ recommended
- npm

## Running a project

Each project folder is independent. To run any one of them:

```bash
cd 1_React-playground
npm install
npm run dev
```

Or for another folder:

```bash
cd 9_TodoContext
npm install
npm run dev
```

Open the local Vite URL shown in the terminal to view the app.

## Typical development flow

This repository is primarily a learning sandbox. A common workflow is:

1. Open a folder such as `5_Context-Api` or `3_React-Router`
2. Read the component files and example logic
3. Run the app locally with Vite
4. Modify or extend the demo to explore React behavior

## Notes

- There is no single root app: this is a collection of standalone mini-projects.
- Some folders reuse similar naming patterns (`Context-Api` series), but each one is an independent example.
- The repository is best suited for React practice, experimentation, and concept reinforcement.

## License

This project does not currently declare an explicit license. If you plan to reuse or distribute the code, confirm the repository owner’s licensing intent before using it in a public or commercial context.
