//Post Controller
import Post from '../../models/Posts/Post.model';
import { Request, Response } from 'express';


class Posts {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    const token = req.headers.authorization;
    const id = req.params.id;

    try {
      if (!token || !id) {
        const posts = await Post.findAll();
        res.status(200).json(posts);
        return;
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
  }
}

export default new Posts;
