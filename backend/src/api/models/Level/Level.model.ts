import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";
import User from "../User/User.model";

interface LevelAttributes {
  userid: number;
  exp: number;
  level: number;
  expNeeded: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class LevelModel extends Model<LevelAttributes> implements LevelAttributes {
  public userid!: number;
  public exp!: number;
  public level!: number;
  public expNeeded!: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  static associate(models: any) {
    this.belongsTo(models.User, { foreignKey: "userid", as: "user" });
  }

  public static async updateLevel(
    userid: number,
    newLevel: number
  ): Promise<void> {
    await LevelModel.update({ level: newLevel }, { where: { userid } });
  }

  public static async updateExpNeeded(
    userid: number,
    ExpNeeded: number
  ): Promise<void> {
    await LevelModel.update({ expNeeded: ExpNeeded }, { where: { userid } });
  }

  public static async incrementExp(
    userid: number,
    expToAdd: number
  ): Promise<void> {
    const user = await LevelModel.findOne({ where: { userid } });
    if (user) {
      const updatedExp = user.exp + expToAdd;
      await LevelModel.update({ exp: updatedExp }, { where: { userid } });
    } else {
      throw new Error(`Usuário com ID: ${userid} não encontrado!`);
    }
  }
}

LevelModel.init(
  {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: "userid",
      },
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    expNeeded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelize,
    modelName: "LevelModel",
    tableName: "levels",
    timestamps: true,
  }
);

export default LevelModel;
