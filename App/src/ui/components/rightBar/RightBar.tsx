import UserLevelInfo from "../UserLevelInfo/UserLevelInfo";
import { RightBarContainer } from "../../styles/rightBar/RightBar.styles";

const RightBar = () => {
  return (
    <RightBarContainer>
      <div className="rightBar">
        <div className="container">
          <UserLevelInfo />
        </div>
      </div>
    </RightBarContainer>
  );
};

export default RightBar;