import mongoose from "mongoose";
import { EnvVariables } from "../../env";

const MongoDB_env = EnvVariables.MongoDB;

export default class MongoDB {
  constructor() {}

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(
        `mongodb+srv://${MongoDB_env.user}:${MongoDB_env.password}@cluster0.52tpxzp.mongodb.net/?retryWrites=true&w=majority`,
        {}
      );
      console.log("Conexão com o MongoDB estabelecida com sucesso.");
    } catch (error) {
      console.error("Erro ao conectar ao MongoDB: " + error);
      process.exit(1);
    }
  }
}
