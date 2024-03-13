import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";
import routes from "../../routes";
import { EnvVariables } from "../env";
const PORT = Number(EnvVariables.Port);

export const app = express();

export const httpServer = createServer(app);

export function setupExpress(): void {
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", routes);
}



httpServer.listen(PORT, () => {
  console.log(`Servidor está Rodando na Porta: ${PORT}`);
});

