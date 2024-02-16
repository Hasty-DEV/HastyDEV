import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const URL_FRONTEND: string = import.meta.env.VITE_FRONTEND_URL;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
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
