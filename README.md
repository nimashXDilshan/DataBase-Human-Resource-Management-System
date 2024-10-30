# Welcome to the HRMS Website! 🎉

Welcome to our **Human Resource Management System (HRMS)** website, developed using **React** and **Vite**! This project aims to streamline and enhance HR processes, making it easier for organizations to manage employee information, leave requests, and more.

# Getting Started with Vite React App 🚀

This project was bootstrapped with [Vite React App](https://github.com/vitejs/vite).

## Available Scripts 🛠️

In the project directory, you can run:

### `npm start` 🔥

Runs the app in the development mode.\
Open [http://localhost:5174](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any prevailing lint errors in the console. ⚠️

### `npm test` ✅

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://vite.dev/guide/) for more information.

### `npm run build` 📦

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes for efficient caching.\
Your app is ready to be deployed! 🌐

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

### `npm run eject` ⚠️

Vite does not have an eject feature. Instead, it provides a simple and flexible configuration that you can customize without the need for ejecting. You can easily modify the Vite config file (`vite.config.js`) to suit your project's needs. This approach allows you to have more control over your build setup without being locked into a single configuration.

## Learn More 📚

You can learn more in the [Vite documentation](https://vitejs.dev/guide/) for guidance on how to use Vite effectively.

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting 🧩

Code splitting is a powerful feature that allows you to break your application into smaller chunks, improving load times and performance. 

For more information on how to implement code splitting in your Vite application, check the [Vite documentation](https://vitejs.dev/guide/features.html#code-splitting).

### Analyzing the Bundle Size 📊

Analyzing your app’s bundle size helps identify what’s making it large and optimize it for faster load times.

For guidance on analyzing and optimizing your bundle size in Vite, refer to [Vite's Build and Optimization Guide](https://vitejs.dev/guide/build.html#bundle-analysis).

### Making a Progressive Web App 🌍

This section has moved here: [Vite PWA Plugin Guide](https://vite-plugin-pwa.netlify.app/) for information on setting up a Progressive Web App (PWA) with Vite.

### Advanced Configuration ⚙️

This section has moved here: [Vite Config Documentation](https://vite.dev/config/).

### Deployment 🚀

This section has moved here: [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html).

### `npm run build` fails to minify ❌

This section has moved here: [Vite Build Guide](https://vitejs.dev/guide/build.html#building-for-production).

---

# Folder Structure 📁

- **Server** 
  - **auth**: Authentication-related files (e.g., middleware, token handling)
  - **config**: Configuration files (e.g., database configurations)
  - **controllers**: Functions handling the logic for different routes
  - **routes**: API route definitions
  - **hashGen.js**: Generating password hashes
  - **.env**: Environment variables (database credentials, API keys)
  - **.gitignore**: Git ignore file to exclude certain files from version control
  - **index.js**: Entry point for the server
  - **package.json**: Server dependencies and scripts

- **vite-project (Front-end)** 

  - **node_modules**: Dependencies for the frontend
  - **public**: Public assets like index.html
  - **src**
    - **Components**: Reusable UI components (e.g., buttons, modals, forms)
    - **contexts**: AuthContexts, PrivateRoute - Authorization part
    - **Pages**: Page components (e.g., login, dashboard, profile)
  - **App.css**: Global styling file
  - **App.jsx**: Main App component
  - **config.js**: Configuration file (e.g., API URLs, settings)
  - **index.css**: Additional global styling
  - **main.jsx**: Main entry point for the React application
- **package.json**: Project dependencies and scripts
- **README.md**: Project documentation
- **.gitignore**: Git ignore file

