import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PrivateRouteProps } from "../../../data/@types/PrivateRoute/PrivateRoute.type";

const URL_FRONTEND: string = import.meta.env.VITE_FRONTEND_URL;

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();

  useEffect(() => {
    const isAuthenticated =
      localStorage.getItem("userId") && localStorage.getItem("userToken");
    const isAuthRoute = location.pathname.includes("/auth");

    if (!isAuthenticated && !isAuthRoute) {
      window.location.href = `${URL_FRONTEND}/login`;
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default PrivateRoute;
