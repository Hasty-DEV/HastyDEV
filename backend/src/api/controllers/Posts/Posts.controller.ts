import { NextFunction, Request, Response } from "express";
import { getAllPostsService } from "../../services/Posts/GetAllPosts";
import { PostService } from "../../services/Posts/Post.service";
import Level from "../../services/Level/Level.service";
import logger from "../../../utils/Logger/Logger";

class Posts extends Level {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await getAllPostsService();
      res.status(200).json(posts);
    } catch (error) {
      logger.error("Erro ao buscar posts: " + error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userid: number = req.body.id;
      await this.incrementExpService(userid, 10);
      await PostService(req, res, next); // Deixe PostService lidar com a resposta
      logger.info("Post Criado com Sucesso!");
    } catch (error) {
      logger.error("Erro ao criar post: " + error);
   //   res.status(500).json({ error: "Erro Interno do Servidor" + error });
    }
  };
}

export default new Posts();
