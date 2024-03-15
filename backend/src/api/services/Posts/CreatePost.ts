import { Request } from "express";
import Post from "../../models/Posts/Posts.model";
import logger from "../../../utils/Logger/Logger";

export const createPost = async (req: Request)  => {
  try {
    const {
      id,
      title,
      subtitle,
      isPaid,
      price,
      photos,
      companyContent,
      categories,
      programmingLanguages,
      deadline,
    } = req.body;

  
    console.log(
      id,
      title,
      subtitle,
      isPaid,
      price,
      photos,
      companyContent,
      categories,
      programmingLanguages,
      deadline
    );

    await Post.create({
      userid: id,
      title,
      subtitle,
      isPaid,
      price,
      photos,
      companyContent,
      categories ,
      programmingLanguages ,
      deadline,
    });

    logger.info("post salvo no banco de dados");

  } catch (error) {
    console.error("Erro ao criar post:", error);
    // Aqui você pode lidar com o erro da maneira que preferir,
    // como enviar uma resposta de erro para o cliente
    // ou registrar o erro em um arquivo de log
  }
};

export const createNewPost = (postData: any) => {
  createPost(postData);
};
