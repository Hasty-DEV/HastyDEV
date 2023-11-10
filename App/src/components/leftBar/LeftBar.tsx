import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
//import { AuthContext } from "../../context/authContext";
//import { useContext } from "react";
import UserIcon from "../../assets/user/user_icon.png";

const LeftBar = () => {
  //const authContext = useContext(AuthContext);
  //const currentUser = authContext ? authContext.currentUser : { profilePic: "", name: "" };

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={UserIcon} alt="" />
            <span>Usuário</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Em Construção...</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Em Construção...</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Em Construção...</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Em Construção...</span>
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
        <div className="menu">
          <span>Em Construção...</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Em Construção...</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Em Construção...</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Em Construção...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
