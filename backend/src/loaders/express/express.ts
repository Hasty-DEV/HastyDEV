import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";
import routes from "../../routes";
import { EnvVariables } from "../../config/env";
import * as path from "path";

const PORT = Number(EnvVariables.Port);

export const app = express();
export const httpServer = createServer(app);

export const setupExpress = (): void => {
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", routes);
  const uploadsPath = path.join(__dirname, '../../../uploads');
  app.use('/cdn', express.static(uploadsPath));
  app.use('/cdn', (req: Request, res: Response) => {
    res.status(404).send('File not found');
  });
};

httpServer.listen(PORT, () => {
  console.log(`Servidor está Rodando na Porta: ${PORT}`);
});
