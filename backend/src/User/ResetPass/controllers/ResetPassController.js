const User = require('../../models/userModel');
const VerificationCode = require('../models/resetPassCodeModel');
const bcrypt = require('bcrypt');
const resetPasswordValidationRules = require('../validations/resetPassValidation')
const { validationResult } = require('express-validator');
const { logError, logInfo } = require('../../../utils/logger');
// ...
 

async function resetPassword(req, res) {
  const { email, resetCode, newPassword } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logError("Erros de validação no registro", res, 400);
    return;
  }


  try {
    const code = await VerificationCode.findOne({
      where: {
        resetCode: resetCode,
      },
    });

 

    if (!code) {
      // O código de redefinição é inválido
      return res.status(400).json({ message: 'Código de redefinição de senha inválido.' });
    }

    // Verifique se o código de redefinição não expirou
    if (new Date() > code.expiresAt) {
      // O código de redefinição expirou
      return res.status(400).json({ message: 'Código de redefinição de senha expirou.' });
    }

    // Encontre o usuário com base no e-mail
    const user = await User.findOne({ where: { email } });

    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await user.update({
        password: hashedPassword,
      });

      await code.destroy();

      return res.status(200).json({ message: 'Senha redefinida com sucesso.' });
    } else {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao redefinir a senha.' });
  }
}

module.exports = { resetPasswordValidationRules, resetPassword };
