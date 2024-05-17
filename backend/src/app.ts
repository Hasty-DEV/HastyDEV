import server from "./server";
import Jobs from "./loaders/jobs/jobs.loader";

class App {
    public static Main() {
        server.StartServer();
        Jobs.Loader()
    }
}

App.Main();