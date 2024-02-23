// Importação dos módulos e classes necessárias
import { validationResult } from "express-validator";
import Post from "../../models/Posts/Posts.model";
import { Request, Response } from "express";
import { logError } from "../../../utils/Logger/Logger";
import User from "../../models/User/User.model";

// Definição da classe Posts
class Posts {
  // Método para buscar todos os posts
  public async getAllPosts( res: Response): Promise<void> {
    try {
      // Utilização de encapsulamento para ocultar detalhes de implementação da busca de posts
      const posts = await Post.findAll({
        // Utilização de relacionamento entre classes para incluir informações dos usuários autores dos posts
        include: {
          model: User,
          as: 'author', // Utilização de alias para facilitar a referência ao relacionamento
          attributes: ["first_name", "last_name"], // Utilização de abstração para selecionar apenas os atributos desejados
        },
      });
      res.status(200).json(posts); // Retorno dos posts encontrados
    } catch (error) {
      console.error("Erro ao buscar posts:", error); // Utilização de encapsulamento para lidar com erros internos
      res.status(500).json({ error: "Erro Interno do Servidor" }); // Retorno de mensagem de erro
    }
  }

  // Método para criar um novo post
  public async createPost(req: Request, res: Response): Promise<void> {
    const { id, token, title, content } = req.body;

    // Verificação da integridade dos dados recebidos
    if (!id || !title || !content || !token) {
      res.status(400).json({ error: "Requisição Incompleta" }); // Retorno de mensagem de erro se a requisição estiver incompleta
      return;
    }

    const errors = validationResult(req);

    // Verificação de erros de validação
    if (!errors.isEmpty()) {
      logError("Erros de validação no registro", res, 400); // Utilização de encapsulamento para lidar com erros de validação
      return;
    }

    try {
      // Criação de um novo post
        await Post.create({
        userid: id,
        title,
        content,
      });
      res.status(201).json("Post Criado com Sucesso!"); // Retorno de mensagem de sucesso
    } catch (error) {
      console.error("Erro ao criar post:", error); // Utilização de encapsulamento para lidar com erros internos
      res.status(500).json({ error: "Erro Interno do Servidor" }); // Retorno de mensagem de erro
    }
  }
}

export default new Posts(); // Exportação da instância da classe Posts
