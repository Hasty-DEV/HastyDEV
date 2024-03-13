import { setupExpress } from "./config/express/express";
import { SocketSetup } from "./config/Socket/Socket";
import db from "./config/database/db";

function main() {
  setupExpress();
  SocketSetup();
  db.initDB();
}

main();
