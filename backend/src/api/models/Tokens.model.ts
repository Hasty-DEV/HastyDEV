// import { DataTypes, Model, Sequelize } from "sequelize";
// import EnvVariables from "../../config/env";
// import User from "./User.model";

// const MySQL_env = EnvVariables.sequelize;

// if (
//   !MySQL_env.database ||
//   !MySQL_env.user ||
//   !MySQL_env.password ||
//   !MySQL_env.host
// ) {
//   throw new Error(
//     "Por favor, defina as variáveis de ambiente necessárias para a conexão com o banco de dados."
//   );
// }

// const sequelize = new Sequelize(
//   MySQL_env.database,
//   MySQL_env.user,
//   MySQL_env.password,
//   {
//     host: MySQL_env.host,
//     dialect: "mysql",
//   }
// );

// class Token extends Model {
//   public id!: number;
//   public user_id!: number;
//   public token!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// Token.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: User,
//         key: "userid",
//       },
//     },
//     token: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "Token",
//     tableName: "tokens",
//     timestamps: true,
//   }
// );

// export default Token;
