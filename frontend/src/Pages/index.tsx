import React, { Suspense, lazy, useState } from "react";
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
import Hero from "./Hero/Hero";
import Loader from "../Ui/components/Loader/Loader";

const About = lazy(()=> import("./About/About"));
const Register = lazy(() => import("./Register/Register"));
const EmailVerification = lazy(
  () => import("./EmailVerification/EmailVerification")
);
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));
const Login = lazy(() => import("./Login/Login"));
const Project = lazy(() => import("./Project/Project"));


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
        <Suspense fallback={ <Loader/>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={
                <Register
                  setAllowEmailVerification={setAllowEmailVerification}
                />
              }
            />
            <Route path="/project" element={<Project />} />
            {allowEmailVerification ? (
              <Route
                path="/emailVerification"
                element={<EmailVerification />}
              />
            ) : (
              <Route path="/emailVerification" element={<Navigate to="/" />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default Pages;
