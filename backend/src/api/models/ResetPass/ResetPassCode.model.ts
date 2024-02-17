import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";

export interface ResetPassCodeAttributes {
  resetCodeId?: number;
  userId: number;
  resetCode: string;
  expiresAt: Date;
  createdAt: Date;
}

class ResetPassCode
  extends Model<ResetPassCodeAttributes>
  implements ResetPassCodeAttributes
{
  public resetCodeId?: number;
  public userId!: number;
  public resetCode!: string;
  public expiresAt!: Date;
  public createdAt!: Date;
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
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "resetpasscode",
  }
);

export default ResetPassCode;
