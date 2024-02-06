const User = require('../../models/user.model');
const UserDel = require('../../models/userdel.model');
const Token = require('../../models/user.model');
const bcrypt = require('bcrypt');

const deleteAccountController = {
  deleteAccount: async (req, res) => {
    try {
        //para testes o userid
      const { userId } = req.params;
      const { password, confirmation } = req.body;

      // Encontrar o usuário a ser excluído na tabela 'users'
      const userToDelete = await User.findByPk(userId);

      if (!userToDelete) {
        // Usuário não encontrado na tabela 'users'
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      // Verificar se a senha fornecida coincide com a senha do usuário
      const passwordMatch = await bcrypt.compare(password, userToDelete.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Senha incorreta. Tente novamente.' });
      }

      // Verificar a confirmação da exclusão
      if (!confirmation) {
        return res.status(400).json({ message: 'Confirmação necessária. Por favor, confirme a exclusão.' });
      }

      if (confirmation !== 'confirmar') {
        // Mensagem de confirmação inválida
        return res.status(400).json({ message: 'Confirmação inválida. Por favor, digite "confirmar" para excluir a conta.' });
      }

      // Copiar os dados do usuário para a tabela 'userdel'
      await UserDel.create({
        username: userToDelete.username,
        password: userToDelete.password,
        email: userToDelete.email,
        first_name: userToDelete.first_name,
        last_name: userToDelete.last_name,
      });
      await Token.destroy({
        where: {
          user_id: userId,
        },
      });

      // Excluir o usuário da tabela 'users'
      await userToDelete.destroy();

      return res.status(200).json({ message: 'Conta excluída com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir conta:', error);
      return res.status(500).json({ message: 'Erro ao excluir conta.' });
    }
  },
};

module.exports = deleteAccountController;
