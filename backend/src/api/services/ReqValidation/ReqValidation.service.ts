import { Request, Response } from "express";
import { validationResult } from "express-validator";
import logger from "../../../utils/Logger/Logger";

export const ReqValidation = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty() && res) {
    logger.error("Erros de validação no registro");
     return;
  }
};
