import { setupExpress } from "./loaders/express/express";
import db from "./config/database/db";

class Server {
    public StartServer() {
        setupExpress();
        db.initDB();
    }
}

export default new Server();