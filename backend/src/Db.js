const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

db.authenticate()
  .then(() => {
    console.log("Conexão bem-sucedida com o banco de dados");
  })
  .catch((error) => {
    console.error("Erro na autenticação com o banco de dados:", error);
  });

module.exports = db;
