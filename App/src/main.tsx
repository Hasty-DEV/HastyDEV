import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeContextProvider } from "./data/context/darkModeContext.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./data/context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
