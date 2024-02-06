import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserData: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const token = params.get("token");

  useEffect(() => {
    console.log("ID e Token recebidos:", id, token);

    if (id && token) {
      localStorage.setItem("userId", id);
      localStorage.setItem("userToken", token);
    }
  }, [id, token]);

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>ID do Usuário: {id}</p>
      <p>Token do Usuário: {token}</p>
    </div>
  );
};

export default UserData;
