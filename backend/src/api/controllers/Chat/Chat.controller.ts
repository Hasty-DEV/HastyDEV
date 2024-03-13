import { Socket } from "socket.io";
import * as SocketIO from "socket.io";
import MessageModel from "../../models/Chat/Chat.model";

async function chatController(io: SocketIO.Server, socket: Socket) {
  console.log("Usuário Conectado");

  socket.on("disconnect", () => {
    console.log("Usuário Desconectado");
  });

  socket.on("chatMessage", async (msg: string) => {
    try {
      await MessageModel.saveMessage(msg);
      io.emit("chatMessage", msg);
    } catch (error) {
      console.error("Erro ao salvar a mensagem:", error);
      // Lidar com o erro de forma adequada, se necessário
    }
  });
}

export default chatController;
