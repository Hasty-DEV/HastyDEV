import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserData: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const token = params.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (id && token) {
      localStorage.setItem("userId", id);
      localStorage.setItem("userToken", token);
    }
    navigate("/", { replace: true });
  }, [id, token, navigate]);

  return null;
};

export default UserData;
