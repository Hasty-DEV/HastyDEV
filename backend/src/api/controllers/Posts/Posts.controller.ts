// Post Controller
import { validationResult } from "express-validator";
import Post from "../../models/Posts/Posts.model";
import { Request, Response } from "express";
import { logError } from "../../../utils/Logger/Logger";
import User from "../../models/User/User.model";

class Posts {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await Post.findAll({
        include: {
          model: User,
          as: 'author',
          attributes: ["first_name", "last_name"],
        },
      });
      res.status(200).json(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  public async createPost(req: Request, res: Response): Promise<void> {
    const { id, token, title, content } = req.body;

    if (!id || !title || !content || !token) {
      res.status(400).json({ error: "Requisição Incompleta" });
      return;
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logError("Erros de validação no registro", res, 400);
      return;
    }

    try {
      const post = await Post.create({
        userid: id,
        title,
        content,
      });
      res.status(201).json("Post Criado com Sucesso!");
    } catch (error) {
      console.error("Erro ao criar post:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new Posts();
