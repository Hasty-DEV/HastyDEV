import { BsChatDots } from "react-icons/bs";
import { StyledChatButton } from "../../styles/ChatButton/ChatButton.styles";

const ChatButton = () => {
  return (
    <StyledChatButton>
      <BsChatDots size={24} />
    </StyledChatButton>
  );
};

export default ChatButton;
