import { validationResult } from "express-validator";
import { Request, Response } from "express";
import logger from "../../../utils/Logger/Logger";
import Comment from "../../models/Commets/Commets.model";
import User from "../../models/User/User.model";
import Post from "../../models/Posts/Posts.model";

class Comments {
  public async getAllCommentsForPost(
    req: Request,
    res: Response
  ): Promise<void> {
    const { postid } = req.params;

    try {
      const comments = await Comment.findAll({
        where: { postid },
        include: [
          {
            model: User,
            as: "author",
            attributes: ["userid", "first_name", "last_name"],
          },

          {
            model: Post,
            as: "post",
            attributes: ["postid", "title"],
          },
         
        ],
      });
      res.status(200).json(comments);
    } catch (error: any) {
      logger.error("Erro ao buscar comentários:", { error: error.message });
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  public async createCommentForPost(
    req: Request,
    res: Response
  ): Promise<void> {
    const { postid } = req.params;

    if (!postid) {
      res.status(400).json({
        error: "O parâmetro 'postid' não foi fornecido na requisição",
      });
      return;
    }

    const { userid, content, token } = req.body;

    if (!userid || !content || !token) {
      res.status(400).json({ error: "Requisição Incompleta" });
      return;
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logger.error("Erros de validação no comentário", {
        errors: errors.array(),
      });
      res.status(400).json({ errors: errors.array() });
      return;
    }

    try {
      const comment = await Comment.create({
        postid,
        userid,
        content,
      });
      res
        .status(201)
        .json({ message: "Comentário Criado com Sucesso!", comment });
    } catch (error: any) {
      logger.error("Erro ao criar comentário:", { error: error.message });
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new Comments();
