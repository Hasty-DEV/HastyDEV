 
const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  "users",
    "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

db.authenticate();

module.exports = db;
