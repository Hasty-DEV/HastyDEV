import { Request } from "express";
import Post from "../../models/Posts/Posts.model";
import logger from "../../../utils/Logger/Logger";

export const createPost = async (req: Request) => {
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

    await Post.create({
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
  } catch (error) {
    console.error("Erro ao criar post:", error);
  }
};

export const createNewPost = (postData: any) => {
  createPost(postData);
};
