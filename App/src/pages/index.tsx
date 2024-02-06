import { createBrowserRouter } from "react-router-dom";
import Layout from "../ui/components/Layout/Layout";
import UserData from "../ui/components/UserData/UserData";
import Home from "./home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "user",
                element: <UserData />,
            },
        ],
    },
]);

export default routes;