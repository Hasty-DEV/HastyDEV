import Server from "./server";
import Databases from "./config/database/db";
import routes from "./routes";
import EnvVariables from "./config/env";

const PORT = Number(EnvVariables.Port)

const server = new Server(PORT, routes);
const db = new Databases();

server.start();
db.initDB();
