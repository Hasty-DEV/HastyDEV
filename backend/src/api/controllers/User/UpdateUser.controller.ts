import { Request, Response } from "express";
import User from "../../models/User/User.model";
import validationRules from "../Validation/validations.controller";
import { validationResult } from "express-validator";

class UpdateUser {
  public async updateUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      if (!userId) {
        res.status(400).json({ message: "ID de usuário ausente na solicitação" });
        return;
      }

      await Promise.all(validationRules.updateUserValidationRules.map(rule => rule.run(req)));
      
      const { username, email, first_name, last_name } = req.body;

      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        res.status(400).json(`Erros de validação no Register ${errorMessages.join(', ')}`);
        return;
      }

      const user = await User.findByPk(userId);

      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }
      
      // Verifica se o novo username já está sendo utilizado por outro usuário
      if (username !== user.username) {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
          res.status(400).json({ message: "Este nome de usuário já está em uso" });
          return;
        }
      }

      // Atualiza os campos do usuário
      if (username) user.username = username;
      if (email) user.email = email;
      if (first_name) user.first_name = first_name;
      if (last_name) user.last_name = last_name;

      // Salva as alterações no banco de dados
      await user.save();

      res.status(200).json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
      res.status(500).json({ message: "Erro ao processar a solicitação" });
    }
  }
}

export default new UpdateUser();
