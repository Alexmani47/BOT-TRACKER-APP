# React + Vite
 Bot Tracker
Bot Tracker is a user-friendly web application built with React that helps you manage and monitor your trading bots. It gives you a central place to keep track of how your bots are performing, add new bots, view details, and remove ones that are no longer needed.

 What the App Does
 Displays all your bots in a clean, organized list so you can see everything at a glance.

 Lets you search for a specific bot by name, making it easy to find exactly what you’re looking for.

 You can add a new bot using a simple form that asks for the bot’s name, strategy, and other key details.

 Click on a bot to view more detailed information about its purpose, logic, and current stats.

 See performance info for each bot (we're planning to show performance charts soon too).

 Delete a bot quickly and get a small toast message confirming it’s been removed.

 View a summary of your entire bot collection to see how everything is doing overall.


 All data is stored and updated via a local JSON server, making it fast and easy to test without needing a full backend.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
