import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../loaders/sequelize/sequelize";
import User from "../User/User.model";
import { LoginHistoryAttributes } from "../../../types/LoginHistory/LoginHistory.type";

class LoginHistoryModel
  extends Model<LoginHistoryAttributes>
  implements LoginHistoryAttributes {
  public id!: number;
  public login_date!: Date;
  public userid!: number;

  static associate(models: any) {
    this.belongsTo(models.User, { foreignKey: "userid", as: "user" });
  }
}

LoginHistoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    login_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "userid",
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: "LoginHistoryModel",
    tableName: "LoginHistory",
    timestamps: false,
  }
);

export default LoginHistoryModel;
