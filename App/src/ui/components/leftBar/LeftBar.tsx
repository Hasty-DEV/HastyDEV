/* eslint-disable @typescript-eslint/no-explicit-any */
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import LeftBarContainer from "../../styles/leftBar/LeftBar.styles";
import { useCallback, useEffect, useState } from "react";
import { getUserData } from "../../../data/services/userService";
import { Button } from "react-bootstrap";
import { useAuth } from "../../../data/context/AuthContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { getUserIcon } from "../../../data/services/getUserIconService";
import DefaultUserIcon from "../../assets/user/user_icon.png";

interface UserDataTypes {
  first_name: string;
  last_name: string;
}

const LeftBar = () => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const [loading, setLoading] = useState(false);
  const [userIcon, setUserIcon] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      setUserData(user);
      const icon = await getUserIcon();
      if (icon && icon.data) {
        setUserIcon(URL.createObjectURL(new Blob([icon.data])));
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <LeftBarContainer>
        <div className="leftBar">
          <div className="container">
            <div className="menu">
              <div className="user">
                <Link to="/perfil">
                  <button>
                    <img src={userIcon || DefaultUserIcon} alt="" />
                  </button>
                </Link>
                <span>
                  {userData
                    ? `${userData.first_name} ${userData.last_name}`
                    : "Usuário"}
                </span>
              </div>
            </div>
            <hr />
            <div className="menu">
              <span>Em Construção...</span>
              <div className="item">
                <img src={Events} alt="" />
                <span>Em Construção...</span>
              </div>
              <div className="item">
                <img src={Gaming} alt="" />
                <span>Em Construção...</span>
              </div>
              <div className="item">
                <img src={Gallery} alt="" />
                <span>Em Construção...</span>
              </div>
              <div className="item">
                <img src={Videos} alt="" />
                <span>Em Construção...</span>
              </div>
              <div className="item">
                <img src={Messages} alt="" />
                <span>Em Construção...</span>
              </div>
            </div>
            <hr />
            <div className="menu mt-3">
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </LeftBarContainer>
    </>
  );
};

export default LeftBar;
