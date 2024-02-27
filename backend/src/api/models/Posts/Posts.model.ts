import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";
import User from "../User/User.model";

interface PostAttributes {
  postid: number;
  userid: number;
  title: string;
  content: string;
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
  public title!: string;
  public content!: string;

  // Método para exibir o conteúdo do post
  //public displayContent(): void {
  // console.log("Conteúdo do Post:");
  //  console.log(this.content);
  //}
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
    content: {
      type: DataTypes.STRING,
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

//class Article extends Post {
//  public displayContent(): void {
//    console.log("Artigo:");
//    console.log(this.title);
//    console.log(this.content);
//  }
//}

//class EventPost extends Post {
//  public displayContent(): void {
//   console.log("Detalhes do Evento:");
//   console.log("Título do Evento: " + this.title);
//   console.log("Data e hora do Evento: " + this.content);
// }
//}
