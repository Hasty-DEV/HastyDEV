import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import About from "./routes/About/About";
import ContactUs from "./routes/ContactUs/ContactUs";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Hero from "./routes/Hero/Hero";
import Login from "./routes/Login/Login";
import Project from "./routes/Project/Project";
import Register from "./routes/Register/Register";
import Chat from "./components/Chat/Chat";

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePersisteState from "./utils/usePersisteState";
import { AuthProvider, useAuth } from "./Contexts/Auth/AuthProvider";

type RouteAccessProps = {
  children: React.ReactNode;
  authLevel?: "authed" | "unauthed";
};

function RouteAccess({ children, authLevel = "authed" }: RouteAccessProps) {
  const { user } = useAuth();

  const isUserAuthed = user !== null;

  if (!isUserAuthed && authLevel === "authed") {
    return <Navigate to="/" replace />;
  }

  if (!isUserAuthed && authLevel === "authed") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  const [theme, setTheme] = usePersisteState("themes", light);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/login"
            element={
              <RouteAccess authLevel="unauthed">
                <Login />
              </RouteAccess>
            }
          />
          <Route
            path="/register"
            element={
              <RouteAccess authLevel="unauthed">
                <Register />
              </RouteAccess>
            }
          />
          <Route
            path="/chat"
            element={
              <RouteAccess authLevel="authed">
                <Chat />
              </RouteAccess>
            }
          />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  </ThemeProvider>
  );
}

export default App;
