import { NextFunction, Request, Response } from "express";
import { getAllPostsService } from "../../services/Posts/GetAllPosts";
import { PostService } from "../../services/Posts/Post.service";
import Level from "../../services/Level/Level.service";

class Posts extends Level {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await getAllPostsService();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await PostService(req, res, next);
      const userid: number = req.body.id;
      await this.incrementExp(userid, 10);
      res.status(201).json("Post Criado com Sucesso!");
    } catch (error) {
      console.error("Erro ao criar post:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  };
}

export default new Posts();
