/* eslint-disable @typescript-eslint/no-explicit-any */
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import UserIcon from "../../assets/user/user_icon.png";
import LeftBarContainer from "../../styles/leftBar/LeftBar.styles";
import { useCallback, useEffect, useState } from "react";
import { getUserData } from "../../../data/services/userService";
import { Button } from "react-bootstrap";
import { useAuth } from "../../../data/context/AuthContext";
import Loader from "../Loader/Loader";

const LeftBar = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();
  const handleOnLoad = useCallback(async () => {
    try {
      const response = await getUserData();
      console.log(response);
      setUserData(response);
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  }, []);

  useEffect(() => {
    handleOnLoad();
  }, [handleOnLoad]);

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
                <img src={UserIcon} alt="" />
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
