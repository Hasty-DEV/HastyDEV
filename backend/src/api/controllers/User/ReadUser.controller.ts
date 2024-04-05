import { Request, Response } from "express";
import User from "../../models/User/User.model";
import LevelModel from "../../models/Level/Level.model";
import logger from "../../../utils/Logger/Logger";
import { UserAttributes } from "../../../types/User/User.type";

interface UserAttributesWithLevel extends UserAttributes {
  level: LevelModel | null;
}

class ReadUser {
  public async getUserData(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      if (!userId) {
        logger.error("ID de usuário ausente na solicitação");
        res.status(400).json({ message: "ID de usuário ausente na solicitação" });
        return;
      }
      const user = await User.findByPk(userId, {
        attributes: { exclude: ["loginAttempts", "password"] },
      });

      if (!user) {
        logger.error("Usuário não encontrado");
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }
      const levelData = await LevelModel.findOne({ where: { userid: userId } });
      const userData: UserAttributesWithLevel = user.toJSON() as UserAttributesWithLevel;
      userData.level = levelData;

      res.status(200).json({ user: userData });
    } catch (error) {
      logger.error("Erro ao ler o usuário: " + error);
      res.status(500).json({ message: "Erro ao processar a solicitação" });
    }
  }
}

export default new ReadUser();
