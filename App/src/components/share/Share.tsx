import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../context/authContext";
import UserIcon from "../../assets/user/user_icon.png"

const Share = () => {
  const authContext = useContext<AuthContextType | undefined>(AuthContext);

  if (!authContext) {
    return null;
  }

  const { currentUser } = authContext;

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={UserIcon}
            alt=""
          />
          <input type="text" placeholder={`O que você está pensando... ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Adicionar Imagem</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Adicionar Lugar</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Marcar Amigos</span>
            </div>
          </div>
          <div className="right">
            <button>Compartilhar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
