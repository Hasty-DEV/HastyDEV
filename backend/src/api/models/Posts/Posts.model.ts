import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";
import User from "../User/User.model";

interface PostAttributes {
  postid: number;
  userid: number;
  title: string;
  subtitle: string;
  isPaid: boolean;
  price?: number;
  photos: string; // Alterado para string simples
  companyContent: string;
  categories: string; // Alterado para string simples
  programmingLanguages: string; // Alterado para string simples
  deadline: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, "postid"> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public postid!: number;
  public userid!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public title!: string;
  public subtitle!: string;
  public isPaid!: boolean;
  public price?: number;
  public photos!: string;
  public companyContent!: string;
  public categories!: string;
  public programmingLanguages!: string;
  public deadline!: Date;
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
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Padrão para não remunerado
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    photos: {
      type: DataTypes.STRING, // Alterado para string simples
      allowNull: false,
      defaultValue: "", // Padrão para nenhum foto
    },
    companyContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categories: {
      type: DataTypes.STRING, // Alterado para string simples
      allowNull: false,
      defaultValue: "", // Padrão para nenhuma categoria
    },
    programmingLanguages: {
      type: DataTypes.STRING, // Alterado para string simples
      allowNull: false,
      defaultValue: "", // Padrão para nenhuma linguagem de programação
    },
    deadline: {
      type: DataTypes.DATE,
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

Post.belongsTo(User, { foreignKey: "userid", as: "author" });

export default Post;
