import { Socket } from "socket.io";
import * as SocketIO from "socket.io";
import logger from "../../../utils/Logger/Logger";
import MessageModel from "../../models/Chat/Chat.model";

async function chatController(io: SocketIO.Server, socket: Socket) {
  logger.info("Usuário Conectado");

  socket.on("disconnect", () => {
    logger.info("Usuário Desconectado");
  });

  socket.on("chatMessage", async (msg: string) => {
    try {
      await MessageModel.saveMessage(msg);
      io.emit("chatMessage", msg);
    } catch (error: any) {
      logger.error("Erro ao salvar a mensagem:", { error: error.message });
    }
  });
}

export default chatController;
