import { NextFunction, Request, Response } from "express";
 
import { ReqValidation } from "../ReqValidation/ReqValidation.service";
import { createPost } from "./CreatePost"; 

export const PostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
 
    await ReqValidation(req, res);
    await createPost(req, res);  
    next();
 
};
