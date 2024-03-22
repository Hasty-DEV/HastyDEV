import { BsChatDots } from "react-icons/bs";
import { StyledChatButton } from "../../styles/ChatButton/ChatButton.styles";

const ChatButton = () => {
  return (
    <StyledChatButton className="position-fixed d-flex justify-content-center align-items-center ">
      <BsChatDots size={24} />
    </StyledChatButton>
  );
};

export default ChatButton;
