
import { Sequelize } from "sequelize";
import { EnvVariables } from "../../config/env";

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