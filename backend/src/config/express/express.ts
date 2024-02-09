import express, { Application } from "express";
import cors from "cors";

export default class ExpressConfig {
  public app: Application;

  constructor() {
    this.app = express();
    this.setup();
  }

  private setup(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }
}
