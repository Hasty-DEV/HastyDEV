import { NextFunction, Request, Response } from "express";
import { isPostRequestIncomplete } from "./ReqPostVerification";
import { ReqValidation } from "../ReqValidation/ReqValidation.service";
import { createPost } from "./CreatePost"; // Importe a função corretamente

export const PostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await isPostRequestIncomplete(req, res, next);
  await ReqValidation(req, res);
  await createPost(req);  
  next();
};