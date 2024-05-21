import { useCallback, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { getUserData } from "../../../data/services/userService";
import UserLevelInfoContainer from "../../styles/UserLevelInfo/UserLevelInfo.styles";

const UserLevelInfo = () => {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const [loading, setLoading] = useState(false);
  const [userIcon, setUserIcon] = useState<string>();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      setUserData(user);
      const icon = await getUserIcon();
      setUserIcon(icon);
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading && <Loader />}
      <UserLevelInfoContainer>
 
        <div className="item">
          <span>Seu Nível</span>
          <div className="user">
            <div className="userInfo">
              <img src={userIcon} alt="" />
              <span className="username">{userData?.username}</span>
            </div>
            <div className="level d-flex flex-column">
              {userData?.level && (
                <>
                  <span>{`${userData?.level.level} Lvl`}</span>
                  <span>{`${userData?.level.exp}/${userData?.level.expNeeded} exp`}</span></>
              )}
            </div>
          </div>

        </div>
      
      </UserLevelInfoContainer>
    </>
  );
};

export default UserLevelInfo;
