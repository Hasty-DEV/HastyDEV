import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../routes/Login/Login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { user } = useContext(AuthContext);

    if (user === null) return <Login/>;

    return children;
}