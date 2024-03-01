import { Request } from "express";
import Post from "../../models/Posts/Posts.model";

const createPost = async (req: Request) => {
  const { id, title, content } = req.body;
  await Post.create({
    userid: id,
    title,
    content,
  });
};

export const createNewPost = (postData: any) => {
  createPost(postData);
};
