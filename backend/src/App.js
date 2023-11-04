const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./mongoDB"); // Importe o arquivo de configuração do MongoDB
const routes = require("./User/routes");
const chatController = require("./Chat/controllers/chatController");
const chatRoutes = require("./Chat/Routes/ChatRoutes");

// Carregue variáveis de ambiente do arquivo .env se necessário
require("dotenv").config();

// Conexão com o MongoDB
connectDB();

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

// rotas privadas chat
app.use("/api/chat", chatRoutes);

// Conexão Socket
io.on("connection", (socket) => {
  chatController(io, socket);
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
