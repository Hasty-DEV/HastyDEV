import { createBrowserRouter } from "react-router-dom";
import Layout from "../ui/components/Layout/Layout";
import UserData from "../ui/components/UserData/UserData";
import Home from "./home/Home";
import PrivateRoute from "../ui/components/PrivateRoute/PrivateRoute";

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
    ],
  },
]);

export default routes;