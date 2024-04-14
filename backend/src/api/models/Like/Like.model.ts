// Importe as dependências necessárias
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";
import User from "../User/User.model";
import Posts from "../Posts/Posts.model";

// Defina o modelo da tabela Likes
class Like extends Model {
  // Defina os campos da tabela Likes
  public id!: number;
  public userId!: number;
  public postId!: number;
}

// Inicialize o modelo Likes com os campos e configurações necessárias
Like.init(
  {
    // Defina os campos da tabela Likes
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
    // Defina as configurações do modelo Likes
    sequelize: sequelize,
    modelName: "Like",
    tableName: "likes", // Nome da tabela no banco de dados
    timestamps: true, // Adicionar timestamps createdAt e updatedAt
  }
);

// Relacionamento com o modelo User
Like.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relacionamento com o modelo Post
Like.belongsTo(Posts, { foreignKey: "postId", as: "post" });

// Exporte o modelo Likes
export default Like;
