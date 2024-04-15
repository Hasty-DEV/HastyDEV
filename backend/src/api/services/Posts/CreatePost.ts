import { Request, Response, NextFunction } from "express";
import Post from "../../models/Posts/Posts.model";
import logger from "../../../utils/Logger/Logger";

export const createPost = async (req: Request, res: Response) => {
  try {
    const {
      id,
      title,
      subtitle,
      content,
      isPaid,
      price,
      photos,
      companyContent,
      categories,
      programmingLanguages,
      deadline,
      likes = 0
    } = req.body;

    const newPost = await Post.create({
      userid: id,
      title,
      subtitle,
      content,
      isPaid,
      price,
      photos,
      companyContent,
      categories,
      programmingLanguages,
      deadline,
      likes,
    });

    logger.info("post salvo no banco de dados");

    const postId = newPost.postid;

    res.status(201).json({ postId });  
  } catch (error) {
    logger.error("Erro ao criar post:", error);
    res.status(500).json({ error: "Erro Interno do Servidor" });
  }
};

export const createNewPost = async (req: Request, res: Response) => {
  await createPost(req, res);
};
