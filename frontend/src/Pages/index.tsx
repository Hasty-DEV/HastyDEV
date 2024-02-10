import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../Data/Contexts/Auth/AuthProvider";
import light from "../Ui/styles/themes/light";
import dark from "../Ui/styles/themes/dark";
import Header from "../Ui/Partials/Header/Header";
import Footer from "../Ui/Partials/Footer/Footer";
import Loader from "../Ui/components/Loader/Loader";
const EmailVerification = lazy(
  () => import("./EmailVerification/EmailVerification")
);
const About = lazy(() => import("./About/About"));
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));
const Hero = lazy(() => import("./Hero/Hero"));
const Login = lazy(() => import("./Login/Login"));
const Project = lazy(() => import("./Project/Project"));
const Register = lazy(() => import("./Register/Register"));

type RouteAccessProps = {
  children: React.ReactNode;
  authLevel?: "authed" | "unauthed";
};

const RouteAccess = ({ children, authLevel = "authed" }: RouteAccessProps) => {
  const { user } = useAuth();

  const isUserAuthed = user !== null;

  if (!isUserAuthed && authLevel === "authed") {
    return <Navigate to="/" replace />;
  }

  if (!isUserAuthed && authLevel === "authed") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

type PagesProps = {
  theme: any;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
};

const Pages: React.FC<PagesProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} />
      <Suspense fallback={<Loader />}>
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
          <Route path="/project" element={<Project />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Pages;
