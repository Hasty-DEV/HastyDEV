import * as dotenv from "dotenv";

dotenv.config();

export const EnvVariables = {
  node_env: process.env.NODE_ENV,
  sequelize: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
  },
  mail: {
    user: process.env.GMAIL_USER,
    password: process.env.GMAIL_PASS,
  },
  secret: {
    value: process.env.SECRET,
    refreshSecret: process.env.REFRESH_SECRET,
    saltrounds: process.env.SALTROUNDS_SECRET,
  },
  frontEndIP: process.env.FRONT_END_IP,
  MongoDB: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
  },
  Port: process.env.PORT,
};
