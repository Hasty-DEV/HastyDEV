import { sequelize } from "../../../loaders/sequelize/sequelize";

export default class MySQL {
  constructor() { }

  public static async connect(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log("Conexão bem-sucedida com o MySQL.");
    } catch (error: any) {
      console.error("Erro na autenticação com o MySQL:", error);
      throw error;
    }
  }
}
