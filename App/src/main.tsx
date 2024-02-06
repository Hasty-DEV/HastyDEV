import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeContextProvider } from "./data/context/darkModeContext.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
