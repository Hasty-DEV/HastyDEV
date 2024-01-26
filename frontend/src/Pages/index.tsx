import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Chat from "../Ui/components/Chat/Chat";
import Header from "../Ui/Partials/Header/Header";
import Footer from "../Ui/Partials/Footer/Footer";
import EmailVerification from "./EmailVerification/EmailVerification";
import { useAuth } from "../Data/Contexts/Auth/AuthProvider";
import light from "../Ui/styles/themes/light";
import dark from "../Ui/styles/themes/dark";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Hero from "./Hero/Hero";
import Login from "./Login/Login";
import Project from "./Project/Project";
import Register from "./Register/Register";


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
        <Route path="/emailVerification" element={<EmailVerification />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Pages;
