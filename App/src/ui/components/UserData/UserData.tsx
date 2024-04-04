import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../data/context/AuthContext";

const UserData = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const token = params.get("token");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");

    if (id && token) {
      localStorage.setItem("userId", id);
      localStorage.setItem("userToken", token);
    }
    login();
    navigate("/", { replace: true });
  }, [id, token, navigate, login]);

  return null;
};

export default UserData;
