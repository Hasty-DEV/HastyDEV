import { NextFunction, Request, Response } from "express";
import { isPostRequestIncomplete } from "./ReqPostVerification";
import { PostHasError } from "./PostHasError";
import { createNewPost } from "./CreatePost";

export const PostService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await isPostRequestIncomplete(req, res, next);
  await PostHasError(req, res);
  await createNewPost(req);
  next();
};
