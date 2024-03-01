import { Request, Response, NextFunction, response } from "express";

export const isPostRequestIncomplete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, token, title, content } = req.body;

  if (!id || !token || !title || !content) {
    return res.status(400).json({ error: "Requisição incompleta" });
  } else {
    next();
  }
};
