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
    const { userid, content } = req.body;

    if (!userid || !content) {
      res.status(400).json({ error: "Requisição Incompleta" });
      return;
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logError("Erros de validação no comentário", res, 400);
      return;
    }

    try {
      const comment = await Comment.create({
        postid,
        userid,
        content,
      });
      res.status(201).json("Comentário Criado com Sucesso!");
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new Comments();
