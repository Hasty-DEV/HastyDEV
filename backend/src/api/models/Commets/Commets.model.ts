// Importação dos módulos e classes necessárias
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";
import User from "../User/User.model";
import Post from "../Posts/Posts.model";

// Modelo para a tabela de Comentários
class Comment extends Model {
  public commentid!: number;
  public postid!: number;
  public userid!: number;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Comment.init(
  {
    commentid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: 'CASCADE',
    },
  },
  {
    tableName: "comments",
    sequelize, // passando a instância do Sequelize
  }
);

Comment.belongsTo(User, { foreignKey: 'userid', as: 'author' });
Comment.belongsTo(Post, { foreignKey: 'postid', as: 'post' });

export default Comment;
