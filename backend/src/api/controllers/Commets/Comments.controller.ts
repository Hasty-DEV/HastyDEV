// Importação dos módulos e classes necessárias
import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { logError } from "../../../utils/Logger/Logger";
import Comment from "../../models/Commets/Commets.model"; 
import User from "../../models/User/User.model";
import Post from "../../models/Posts/Posts.model";

// Definição da classe Comments
class Comments {
  // Método para buscar todos os comentários de um post específico
  public async getAllCommentsForPost(req: Request, res: Response): Promise<void> {
    const { postid } = req.params;

    try {
      // Utilizando o método findAll para buscar comentários no banco de dados
      const comments = await Comment.findAll({
        where: { postid },
        include: [
          {
            model: User,
            as: 'author',
            attributes: ["userid", "username"],
          },
          {
            model: Post,
            as: 'post',
            attributes: ["postid", "title"],
          },
        ],
      });
      res.status(200).json(comments);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  // Método para criar um novo comentário em um post específico
  public async createCommentForPost(req: Request, res: Response): Promise<void> {
    const { postid } = req.params;
  
    if (!postid) {
      // Responde com erro se o parâmetro 'postid' não for fornecido na requisição
      res.status(400).json({ error: "O parâmetro 'postid' não foi fornecido na requisição" });
      return;
    }
  
    const { userid, content, token } = req.body;
  
    if (!userid || !content || !token) {
      // Responde com erro se a requisição estiver incompleta
      res.status(400).json({ error: "Requisição Incompleta" });
      return;
    }
  
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      // Loga os erros de validação e responde com erro 400
      logError("Erros de validação no comentário", res, 400);
      return;
    }
  
    try {
      // Cria um novo comentário associado ao post específico usando postid
      const comment = await Comment.create({
        postid,
        userid,
        content,
      });
      res.status(201).json({ message: "Comentário Criado com Sucesso!", comment });
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}  

export default new Comments();
