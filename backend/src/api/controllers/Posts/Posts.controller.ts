import { validationResult } from "express-validator";
import Post from "../../models/Posts/Posts.model";
import { Request, Response } from "express";
import { logError } from "../../../utils/Logger/Logger";
import User from "../../models/User/User.model";

const getAllPostsWithAuthorInfo = async (): Promise<any[]> => {
  const posts = await Post.findAll({
    include: {
      model: User,
      as: "author",
      attributes: ["first_name", "last_name"],
    },
  });
  return posts;
};

const isRequestIncomplete = (req: Request): boolean => {
  const { id, token, title, content } = req.body;
  return !id || !token || !title || !content;
};

class Posts {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await getAllPostsWithAuthorInfo();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      if (isRequestIncomplete(req)) {
        res.status(400).json({ error: "Requisição Incompleta" });
        return;
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        logError("Erros de validação no registro", res, 400);
        return;
      }
      await this.createNewPost(req.body);
      res.status(201).json("Post Criado com Sucesso!");
    } catch (error) {
      console.error("Erro ao criar post:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  private async createNewPost(postData: any): Promise<void> {
    const { id, title, content } = postData;
    await Post.create({
      userid: id,
      title,
      content,
    });
  }
}

export default new Posts();

/*
Abstração no Código:

Abstração é a técnica de esconder detalhes complexos e mostrar apenas as funcionalidades essenciais de um objeto ou sistema. No código fornecido, podemos identificar vários exemplos de abstração, incluindo:

1. Função para obter todos os posts com informações do autor:
   - A função `getAllPostsWithAuthorInfo` abstrai a lógica de busca de todos os posts juntamente com informações do autor. Ela encapsula os detalhes de como os dados são recuperados do banco de dados e retorna apenas os posts com os atributos especificados do autor.

2. Função para verificar se a requisição está completa:
   - A função `isRequestIncomplete` abstrai a lógica para determinar se a requisição está completa ou não. Ela oculta os detalhes da verificação de cada campo na requisição e retorna um booleano indicando se a requisição está completa ou não.

3. Encapsulamento de lógica dentro dos métodos do controller:
   - Os métodos `getAllPosts` e `createPost` encapsulam a lógica relacionada à obtenção de todos os posts e à criação de um novo post, respectivamente. Eles escondem os detalhes de implementação específicos dessas operações e fornecem uma interface abstrata para interagir com essas funcionalidades.

4. Utilização de funções utilitárias:
   - A função `logError` é um exemplo de abstração, pois encapsula a lógica para registrar erros e enviar respostas de erro ao cliente. Ela esconde os detalhes de como os erros são tratados e fornece uma interface simples para lidar com erros de validação.

Esses exemplos de abstração ajudam a tornar o código mais modular, fácil de entender e manter, promovendo a reutilização de código e a separação de preocupações.
*/
