import { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import light from "../ui/themes/light";
import dark from "../ui/themes/dark";
import Header from "../ui/partials/Header/Header";
import Footer from "../ui/partials/Footer/Footer";
import Hero from "./Hero/Hero";
import Loader from "../ui/components/Loader/Loader";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { PagesProps } from "../data/@types/Page/Page.type";
import CheckEmailNotVerified from "./CheckEmailNotVerified/CheckEmailNotVerified";
const About = lazy(() => import("./About/About"));
const Register = lazy(() => import("./Register/Register"));
const EmailVerification = lazy(
  () => import("./EmailVerification/EmailVerification")
);
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));
const Login = lazy(() => import("./Login/Login"));
const Project = lazy(() => import("./Project/Project"));

const Pages = ({ theme, setTheme }: PagesProps) => {
  const [allowEmailVerification, setAllowEmailVerification] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/CheckEmailNotVerified" element={<CheckEmailNotVerified 
             setAllowEmailVerification={setAllowEmailVerification} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default Pages;
