import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { logError } from "../../../utils/Logger/Logger";

export const PostHasError = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty() && res) {
    logError("Erros de validação no registro", res, 400);
    return;
  }
};
