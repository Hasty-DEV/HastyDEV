import { Request, Response } from "express";
import Post from "../../models/Posts/Posts.model";
import logger from "../../../utils/Logger/Logger";

const createPost = async (req: Request): Promise<void> => {
  const { id, title, content } = req.body;
  try {
    await Post.create({
      userid: id,
      title,
      content,
    });
    logger.info("Post criado com sucesso");
   
  } catch (error) {
    logger.error("Erro ao criar post: " + error);
   
  }
};

export const createNewPost = (postData: any,  ) => {
  createPost(postData);
};
