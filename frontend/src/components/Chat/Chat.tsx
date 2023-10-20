import { useState, useEffect } from "react";
import { socket } from "../../socket";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    function onChatMessage(message: string) {
      setMessages((prev) => [...prev, message]);
    }

    socket.on("chatMessage", onChatMessage);

    return () => {
      socket.off("chatMessage", onChatMessage);
    };
  }, []);

  const sendMessage = (message: string) => {
    socket.emit("chatMessage", message);
  };

  return (
    <div className="App">
      <ChatMessages messages={messages} />
      <ChatForm onSendMessage={sendMessage} />
    </div>
  );
}
