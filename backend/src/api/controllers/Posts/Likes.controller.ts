import { Request, Response } from "express";
import logger from "../../../utils/Logger/Logger";
import Like from "../../models/Like/Like.model";
import Post from "../../models/Posts/Posts.model";

class LikesController {
  public async saveLike(req: Request, res: Response): Promise<void> {
    try {
      const { postId } = req.body;
      const userId = req.body.id;

      const existingLike = await Like.findOne({
        where: {
          postId,
          userId,
        },
      });

      if (existingLike) {
        res.status(400).json({ error: "Você já curtiu este post" });
        return;
      }

      await Like.create({
        postId,
        userId,
      });

      const post = await Post.findByPk(postId);
      if (!post) {
        res.status(404).json({ error: "Post não encontrado" });
        return;
      }

      post.likes += 1;
      await post.save();

      res.status(200).json({ message: "Like adicionado com sucesso" });
    } catch (error) {
      console.error("Erro ao salvar o like: ", error);
      logger.error("Erro ao salvar o like: " + error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  public async removeLike(req: Request, res: Response): Promise<void> {
    try {
      const { postId } = req.body;
      const userId = req.body.id;

      const deletedLikeCount = await Like.destroy({
        where: {
          postId,
          userId,
        },
      });

      if (deletedLikeCount === 0) {
        res.status(404).json({ error: "Você ainda não curtiu este post" });
        return;
      }

      const post = await Post.findByPk(postId);
      if (!post) {
        res.status(404).json({ error: "Post não encontrado" });
        return;
      }

      post.likes -= 1;
      await post.save();

      res.status(200).json({ message: "Like removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover o like: ", error);
      logger.error("Erro ao remover o like: " + error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  public async hasLiked(req: Request, res: Response): Promise<void> {
    try {
      const { postId } = req.body;
      const userId = req.body.id;

      const existingLike = await Like.findOne({
        where: {
          postId,
          userId,
        },
      });

      if (existingLike) {
        res.status(200).json({ liked: true });
      } else {
        res.status(200).json({ liked: false });
      }
    } catch (error) {
      console.error("Erro ao verificar se o usuário curtiu o post: ", error);
      logger.error("Erro ao verificar se o usuário curtiu o post: " + error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new LikesController();
