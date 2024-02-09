import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";

class Token extends Model {
  public id!: number;
  public user_id!: number;
  public token!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "updatedAt",
    },
  },
  {
    tableName: "tokens",
    sequelize,
    timestamps: false,
    underscored: true,
  }
);

export default Token;
