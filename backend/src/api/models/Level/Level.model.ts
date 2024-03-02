import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";
import User from "../User/User.model";
import { NextFunction } from "express";

interface LevelAttributes {
  userid: number;
  exp: number;
  level: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LevelCreationAttributes extends Optional<LevelAttributes, "userid"> {}

class LevelModel
  extends Model<LevelAttributes, LevelCreationAttributes>
  implements LevelAttributes
{
  public userid!: number;
  public exp!: number;
  public level!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static async updateLevel(
    userid: number,
    newLevel: number
  ): Promise<void> {
    await LevelModel.update({ level: newLevel }, { where: { userid } });
  }

  public static async incrementExp(
    userid: number,
    expToAdd: number,
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
    modelName: "Level",
    tableName: "levels",
    timestamps: true,
  }
);

export default LevelModel;
