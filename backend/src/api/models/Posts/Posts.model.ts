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
  public displayContent(): void {
    console.log("Conteúdo do Post:");
    console.log(this.content);
  }
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

export class Article extends Post {
  public displayContent(): void {
    console.log("Artigo:");
    console.log(this.title);
    console.log(this.content);
  }
}

export class EventPost extends Post {
  public displayContent(): void {
    console.log("Detalhes do Evento:");
    console.log("Título do Evento: " + this.title);
    console.log("Data e hora do Evento: " + this.content);
  }
}

/*
Explicação sobre Polimorfismo:

O polimorfismo é um conceito da programação orientada a objetos que permite que objetos de diferentes classes sejam tratados de maneira uniforme, mesmo que possuam implementações diferentes para um mesmo método. Isso é possível graças à herança e à capacidade de substituir ou sobrescrever métodos em classes filhas.

Exemplo de implementação de polimorfismo:

Suponha que temos diferentes tipos de posts, como `Article` e `EventPost`, que estendem a classe `Post` e cada tipo de post tem um método `displayContent()` que exibe o conteúdo de maneira diferente.

class Article extends Post {
  // Método para exibir o conteúdo de um artigo
  displayContent() {
    console.log("Artigo:");
    console.log(this.title);
    console.log(this.content);
  }
}

class EventPost extends Post {
  // Método para exibir os detalhes de um evento
  displayContent() {
    console.log("Detalhes do Evento:");
    console.log("Título do Evento: " + this.title);
    console.log("Data e hora do Evento: " + this.content);
  }
}

Neste exemplo, quando chamamos o método `displayContent()` em um objeto do tipo `Article`, ele exibe os detalhes do artigo. Por outro lado, quando chamamos o mesmo método em um objeto do tipo `EventPost`, ele exibe os detalhes específicos do evento. Apesar de ambos os métodos terem o mesmo nome, o comportamento é polimórfico, variando conforme a classe em que é invocado.
*/
