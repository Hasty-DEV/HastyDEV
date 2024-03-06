import { useCallback, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { getUserData } from "../../../data/services/userService";
import DefaultUserIcon from "../../assets/user/user_icon.png";

const UserLevelInfo = () => {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const [loading, setLoading] = useState(false);
  const [userIcon, setUserIcon] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      setUserData(user);
      console.log(user);
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

  return (
    <>
      {loading && <Loader />}
      <div className="item">
        <span>Seu Nível</span>
        <div className="user">
          <div className="userInfo">
            <img src={userIcon || DefaultUserIcon} alt="" />
            <span>{userData?.username}</span>
          </div>
          <div className="d-flex flex-column">
            <span>{`${userData?.level.level} Lvl`}</span>
            <span>{`${userData?.level.exp}/${userData?.level.expNeeded} exp`}</span>

          </div>
        </div>
      </div>
    </>
  );
};

export default UserLevelInfo;
