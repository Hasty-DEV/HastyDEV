import { NextFunction, Request, Response } from "express";
import { isPostRequestIncomplete } from "./ReqPostVerification";
import { ReqValidation } from "../ReqValidation/ReqValidation.service";
import { createNewPost } from "./CreatePost";

export const PostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await isPostRequestIncomplete(req, res, next);
  await ReqValidation(req, res);
  await createNewPost(req);
  next();
};
