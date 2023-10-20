const messageModel = require("../models/messageModel");

function chatController(io, socket) {
  console.log("Usuário Conectado");

  socket.on("disconnect", () => {
    console.log("Usuário Desconectado");
  });

  socket.on("chatMessage", (msg) => {
    messageModel.saveMessage(msg);
    io.emit("chatMessage", msg);
  });
}

module.exports = chatController;
