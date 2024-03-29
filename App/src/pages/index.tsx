import Layout from "../ui/components/Layout/Layout";
import UserData from "../ui/components/UserData/UserData";
import Home from "./home/Home";
import PrivateRoute from "../ui/components/PrivateRoute/PrivateRoute";
import Perfil from "./perfil/Perfil";
import CreatePost from "./CreatePost/CreatePost";
import Chat from "./Chat/Chat";
import Projects from "./Projects/Projects";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Help from "./Help/Help";
import Settings from "./Settings/Settings";
import light from "../ui/styles/themes/light";
import dark from "../ui/styles/themes/dark";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "../ui/partials/navbar/Navbar";
import LeftBar from "../ui/components/leftBar/LeftBar";
import RightBar from "../ui/components/rightBar/RightBar";
import ChatButton from "../ui/components/ChatButton/ChatButton";

 type PagesProps = {
  theme: any;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
};

const Pages = ({ theme, setTheme }: PagesProps) => {

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} />
      <div className="d-flex">
        <LeftBar />
        <div style={{ flex: 6, paddingTop: "100px" }}>
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<UserData />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/createPost" element={<CreatePost />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </PrivateRoute>
        </div>
        <RightBar />
      </div>
      <ChatButton />
    </Router>
  );
};

export default Pages;