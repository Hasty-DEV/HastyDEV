import { Request, Response } from "express";
import User from "../../models/User.model";
import UserDel from "../../models/UserDel.model";
import bcrypt from "bcrypt";

const deleteAccountController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    const { password, confirmation } = req.body;

    // Encontrar o usuário a ser excluído na tabela 'users'
    const userToDelete = await User.findByPk(userId);

    if (!userToDelete) {
      // Usuário não encontrado na tabela 'users'
      res.status(404).json({ message: "Usuário não encontrado." });
      return; // Retorna após enviar a resposta
    }

    // Verificar se a senha fornecida coincide com a senha do usuário
    const passwordMatch = await bcrypt.compare(password, userToDelete.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Senha incorreta. Tente novamente." });
      return;
    }

    // Verificar a confirmação da exclusão
    if (!confirmation) {
      res
        .status(400)
        .json({
          message: "Confirmação necessária. Por favor, confirme a exclusão.",
        });
      return;
    }

    if (confirmation !== "confirmar") {
      // Mensagem de confirmação inválida
      res
        .status(400)
        .json({
          message:
            'Confirmação inválida. Por favor, digite "confirmar" para excluir a conta.',
        });
      return;
    }

    // Copiar os dados do usuário para a tabela 'userdel'
    await UserDel.create({
      username: userToDelete.username,
      password: userToDelete.password,
      email: userToDelete.email,
      first_name: userToDelete.first_name,
      last_name: userToDelete.last_name,
    });

    // Excluir o usuário da tabela 'users'
    await userToDelete.destroy();

    res.status(200).json({ message: "Conta excluída com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir conta:", error);
    res.status(500).json({ message: "Erro ao excluir conta." });
  }
};

export default deleteAccountController;
