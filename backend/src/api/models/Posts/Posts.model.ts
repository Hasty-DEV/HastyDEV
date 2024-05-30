import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../loaders/sequelize/sequelize";
import User from "../User/User.model";
import { PostAttributes } from "../../../types/Post/Post.type";
import { PostCreationAttributes } from "../../../types/PostCreation/PostCreation.type";

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public postid!: number;
  public userid!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public title!: string;
  public subtitle!: string;
  public content!: string;
  public isPaid!: boolean;
  public price?: number;
  public photos!: string;
  public companyContent!: string;
  public categories!: string;
  public programmingLanguages!: string;
  public deadline!: Date;
  public likes!: number;

    
  public author?: User;  
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    photos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    companyContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    programmingLanguages: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
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
    modelName: "Post",
    tableName: "posts",
    timestamps: true,
  }
);

Post.belongsTo(User, { foreignKey: "userid", as: "author" });

export default Post;
