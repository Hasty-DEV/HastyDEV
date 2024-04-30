import MongoDB from "./MongoDB/MongoDB";
import MySQL from "./MySQL/MySQL";

class Databases {
  constructor() { }

  public initDB(): void {
    this.connectAll();
  }

  private connectAll(): void {
    MySQL.connect();
    MongoDB.connect();
  }
}

export default new Databases();