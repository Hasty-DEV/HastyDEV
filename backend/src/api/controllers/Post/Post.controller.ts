//Post Controller
import Post from "../../models/Posts/Posts.model";
import { Request, Response } from "express";

class Posts {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
      return;
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
  }
}

export default new Posts();
