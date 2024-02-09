import { Request, Response } from "express";
import User from "../../models/User.model";
//import { verifyToken } from "../../services/verify.token.middleware";

const readUser = async (req: Request, res: Response): Promise<void> => {
  const userId: string = req.params.id;

  try {
    //await verifyToken(token, userId, res);

    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Erro ao ler o usuário:", error);
    res.status(500).json({ message: "Erro ao processar a solicitação" });
  }
};

export { readUser };
