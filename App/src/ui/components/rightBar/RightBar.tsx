import RightBarContainer from "../../styles/rightBar/RightBar.styles";
import UserLevelInfo from "../UserLevelInfo/UserLevelInfo";

const RightBar = () => {
  return (
    <RightBarContainer>
      <div className="rightBar">
        <div className="container">
          <UserLevelInfo />
          <div className="item">
            <span>Últimas Atividades</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>
                  <span>Jane Doe</span> Mudou a foto dele
                </p>
              </div>
              <span>1 min atrás</span>
            </div>
          </div>
          <div className="item">
            <span>DEVS Online</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RightBarContainer>
  );
};

export default RightBar;
