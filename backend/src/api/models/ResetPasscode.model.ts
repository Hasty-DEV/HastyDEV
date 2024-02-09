import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize();

interface ResetPassCodeAttributes {
  resetCodeId?: number;
  userId: number;
  resetCode: string;
  type: string;
  expiresAt: Date;
}

class ResetPassCode extends Model<ResetPassCodeAttributes> {
  expiresAt!: Date;
}

ResetPassCode.init(
  {
    resetCodeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resetCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ResetPassCode",
  }
);

export default ResetPassCode;
