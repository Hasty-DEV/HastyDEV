import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import light from "../Ui/styles/themes/light";
import dark from "../Ui/styles/themes/dark";
import Header from "../Ui/Partials/Header/Header";
import Footer from "../Ui/Partials/Footer/Footer";
import Loader from "../Ui/components/Loader/Loader";
import Register from "./Register/Register";
import EmailVerification from "./EmailVerification/EmailVerification";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Hero from "./Hero/Hero";
import Login from "./Login/Login";
import Project from "./Project/Project";

type PagesProps = {
  theme: any;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
};

const Pages: React.FC<PagesProps> = ({ theme, setTheme }) => {
  const [allowEmailVerification, setAllowEmailVerification] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <Register setAllowEmailVerification={setAllowEmailVerification} />
            } 
          />
          <Route path="/project" element={<Project />} />
          {allowEmailVerification ? (
            <Route path="/emailVerification" element={<EmailVerification />} />
          ) : (
            <Route path="/emailVerification" element={<Navigate to="/" />} />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Pages;
