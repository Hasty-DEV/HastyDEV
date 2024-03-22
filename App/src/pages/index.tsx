import { createBrowserRouter } from "react-router-dom";
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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "auth",
        element: <UserData />,
      },
      {
        path: "perfil",
        element: (
          <PrivateRoute>
            <Perfil />
          </PrivateRoute>
        ),
      },
      {
        path: "createPost",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "projects",
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
      },
      {
        path: "privacypolicy",
        element: (
          <PrivateRoute>
            <PrivacyPolicy />
          </PrivateRoute>
        ),
      },
      {
        path: "help",
        element: (
          <PrivateRoute>
            <Help />
          </PrivateRoute>
        )
      }, {
        path: "settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        )
      }
    ],
  },
  {
    path: "/chat",
    element: (
      <PrivateRoute>
        <Chat />
      </PrivateRoute>
    ),
  },
]);

export default routes;
