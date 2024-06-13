import { BsChatDots } from "react-icons/bs";
import { StyledChatButton } from "../../styles/ChatButton/ChatButton.styles";

const ChatButton = () => {
  return (
    <a href='https://api.whatsapp.com/send?phone=119977328121' rel="_noopener" target="_blank">
      <StyledChatButton className="position-fixed d-flex justify-content-center align-items-center ">
        <BsChatDots size={24} />
      </StyledChatButton>
    </a>
  );
};

export default ChatButton;
