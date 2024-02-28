import { Request, Response } from "express";
import User from "../../models/User/User.model";

class UpdateUser {
  public async updateUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      if (!userId) {
        res.status(400).json({ message: "ID de usuário ausente na solicitação" });
        return;
      }

      const { username, email, first_name, last_name } = req.body;

      const user = await User.findByPk(userId);

      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }
      
      if (username) user.username = username;
      if (email) user.email = email;
      if (first_name) user.first_name = first_name;
      if (last_name) user.last_name = last_name;

      await user.save();

      res.status(200).json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
      res.status(500).json({ message: "Erro ao processar a solicitação" });
    }
  }
}

export default new UpdateUser();
