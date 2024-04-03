import { Request, Response } from "express";
import User, { UserAttributes } from "../../models/User/User.model";
import logger from "../../../utils/Logger/Logger";

interface UserAttributesSubset {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

class ReadUserBasic {
 

  public async getUserBasicInfo(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      if (!userId) {
        logger.error("ID de usuário ausente na solicitação");
        res.status(400).json({ message: "ID de usuário ausente na solicitação" });
        return;
      }
      const user = await User.findByPk(userId, {
        attributes: ["username", "email", "first_name", "last_name"],
      });

      if (!user) {
        logger.error("Usuário não encontrado");
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }

      const userData: UserAttributesSubset = user.toJSON() as UserAttributesSubset;
      res.status(200).json({ user: userData });
    } catch (error) {
      logger.error("Erro ao ler o usuário: " + error);
      res.status(500).json({ message: "Erro ao processar a solicitação" });
    }
  }
}

export default new ReadUserBasic();
