import { createBrowserRouter } from "react-router-dom";
import Layout from "../ui/components/Layout/Layout";
import UserData from "../ui/components/UserData/UserData";
import Home from "./home/Home";
import PrivateRoute from "../ui/components/PrivateRoute/PrivateRoute";
import Perfil from "./perfil/Perfil";
import CreatePost from "./CreatePost/CreatePost"

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
        )
      }
    ],
  },
]);

export default routes;