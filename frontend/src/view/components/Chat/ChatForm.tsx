// import { useState } from "react";
// function ChatForm({
//   onSendMessage,
// }: {
//   onSendMessage: (message: string) => void;
// }) {
//   const [message, setMessage] = useState("");
//   const handleSendMessage = () => {
//     if (message) {
//       onSendMessage(message);
//       setMessage("");
//     }
//   };
//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input
//         onChange={(e) => setMessage(e.target.value)}
//         value={message}
//         aria-label="Input Label"
//       />
//       <button onClick={handleSendMessage}>Enviar</button>
//     </form>
//   );
// }
// export default ChatForm;
