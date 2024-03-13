import { Request, Response } from "express";
import { ReqValidation } from "../../services/ReqValidation/ReqValidation.service";
import LoginService from "../../services/User/Login.service";
import logger from "../../../utils/Logger/Logger";

class LoginController {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      await ReqValidation(req, res);
      await LoginService(req, res);
    } catch (error) {
      logger.error("Erro no login: " + error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export default new LoginController();
