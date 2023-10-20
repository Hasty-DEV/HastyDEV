const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./User/routes");
const http = require("http");
const { Server } = require("socket.io");
const chatController = require("./Chat/controllers/chatController");

// Conexão com o front
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONT_END_IP,
  },
});

// Rotas públicas
app.use("/", routes);

// Conexão Socket
io.on("connection", (socket) => {
  chatController(io, socket);
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
