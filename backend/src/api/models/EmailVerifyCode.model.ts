import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize();

export interface EmailVerifyCodeAttributes {
  codeId?: number;
  userId: number;
  code: string;
  createdAt?: Date;
}

class EmailVerifyCode extends Model<EmailVerifyCodeAttributes> {}

EmailVerifyCode.init(
  {
    codeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "EmailVerifyCode",
  }
);

export default EmailVerifyCode;
