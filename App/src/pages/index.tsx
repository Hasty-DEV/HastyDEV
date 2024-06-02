import UserData from "../ui/components/UserData/UserData";
import PrivateRoute from "../ui/components/PrivateRoute/PrivateRoute";
import Perfil from "./perfil/Perfil";
import CreatePost from "./CreatePost/CreatePost";
import Projects from "./Projects/Projects";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Help from "./Help/Help";
import Settings from "./Settings/Settings";
import light from "../ui/theme/light";
import dark from "../ui/theme/dark";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../ui/partials/navbar/Navbar";
import LeftBar from "../ui/components/leftBar/LeftBar";
import RightBar from "../ui/components/rightBar/RightBar";
import ChatButton from "../ui/components/ChatButton/ChatButton";
import { PagesProps } from "../data/@types/Page/Page.type";
import { PagesContainer } from "../ui/styles/Pages/Pages.style";
import ProfilePage from "./profile/profile";
import { useState } from "react";
import Posts from "../ui/components/posts/Posts";


const Pages = ({ theme, setTheme }: PagesProps ) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} onSearch={handleSearch} />
      <div className="d-flex">
        <LeftBar />
        <PagesContainer>
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<Posts searchTerm={searchTerm} />} />
              <Route path="/auth" element={<UserData />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/createPost" element={<CreatePost />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
     
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </PrivateRoute>
        </PagesContainer>
        <RightBar />
      </div>
      <ChatButton />
    </Router>
  );
};

export default Pages;
