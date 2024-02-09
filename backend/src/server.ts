import { Application, Router } from "express";
import ExpressConfig from "./config/express/express";

export default class Server {
  private expressConfig: ExpressConfig;
  private app: Application;
  private port: number;

  constructor(port: number, routes: Router) {
    this.port = port;
    this.expressConfig = new ExpressConfig();
    this.app = this.expressConfig.app;
    this.setup(routes);
  }

  private setup(routes: Router): void {
    this.app.use("/api", routes);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor está Rodando na Porta: ${this.port}`);
    });
  }
}