import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../loaders/sequelize/sequelize";
import User from "../User/User.model";
import Posts from "../Posts/Posts.model";

class Like extends Model {
  public id!: number;
  public userId!: number;
  public postId!: number;
}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Like",
    tableName: "likes",
    timestamps: true,
  }
);

Like.belongsTo(User, { foreignKey: "userId", as: "user" });
Like.belongsTo(Posts, { foreignKey: "postId", as: "post" });

export default Like;
