import { Server as SocketIOServer } from "socket.io";
import chatController from "../../api/controllers/Chat/Chat.controller";
import { httpServer } from "../express/express";

export const SocketSetup = () => {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",
    },
    transports: ["websocket"],
  });

  io.on("connection", (socket) => {
    chatController(io, socket);
  });
};
