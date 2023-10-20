import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./routes/About/About";
import ContactUs from "./routes/ContactUs/ContactUs";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Hero from "./routes/Hero/Hero";
import Login from "./routes/Login/Login";
import Project from "./routes/Project/Project";
import Register from "./routes/Register/Register";
import Chat from "./components/Chat/Chat"

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePersisteState from "./utils/usePersisteState";

function App() {
  const [theme, setTheme] = usePersisteState("themes", light);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/project" element={<Project />} />
          <Route path="/chat" element={<Chat />}/>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
