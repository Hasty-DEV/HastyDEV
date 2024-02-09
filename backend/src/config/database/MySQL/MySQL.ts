import { Sequelize } from "sequelize";
import { EnvVariables } from "../../env";

const MySQL_env = EnvVariables.sequelize;

if (
  !MySQL_env.database ||
  !MySQL_env.user ||
  !MySQL_env.password ||
  !MySQL_env.host
) {
  throw new Error(
    "Por favor, defina as variáveis de ambiente necessárias para a conexão com o banco de dados."
  );
}

export const sequelize = new Sequelize(
  MySQL_env.database,
  MySQL_env.user,
  MySQL_env.password,
  {
    host: MySQL_env.host,
    dialect: "mysql",
  }
);

export default class MySQL {
  constructor() {}

  public async connect(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log("Conexão bem-sucedida com o MySQL.");
    } catch (error: any) {
      console.error("Erro na autenticação com o MySQL:", error);
      throw error;
    }
  }
}
