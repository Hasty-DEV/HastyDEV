import { Request, Response } from "express";
import User from "../../models/User/User.model";
import LevelModel from "../../models/Level/Level.model";

class ReadUser {
  public async getUserData(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      if (!userId) {
        res
          .status(400)
          .json({ message: "ID de usuário ausente na solicitação" });
        return;
      }
      const user = await User.findByPk(userId, {
        attributes: { exclude: ["loginAttempts", "password"] },
        include: [{
          model: LevelModel,
          attributes: ["exp", "level"]
        }]
      });

      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }

      res.status(200).json({ user });
    } catch (error) {
      console.error("Erro ao ler o usuário:", error);
      res.status(500).json({ message: "Erro ao processar a solicitação" });
    }
  }
}

export default new ReadUser();
