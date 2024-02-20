import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";

interface PostAttributes {
  postid: number;
  userid: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, "postid"> {}

class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  public postid!: number;
  public userid!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Post.init(
  {
    postid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: "Post",
    tableName: "posts",
    timestamps: true,
  }
);

export default Post;
