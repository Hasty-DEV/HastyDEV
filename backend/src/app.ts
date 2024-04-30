import server from "./server";
import { SocketSetup } from "./config/Socket/Socket";
import Jobs from "./loaders/jobs/jobs.loader";

class App {
    public static Main() {
        server.StartServer();
        SocketSetup();
        Jobs.Loader()
    }
}

App.Main();