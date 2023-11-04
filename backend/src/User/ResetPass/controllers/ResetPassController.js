const User = require('../../models/userModel');
const VerificationCode = require('../models/resetPassCodeModel');
const bcrypt = require('bcrypt');
const resetPasswordValidationRules = require('../validations/resetPassValidation');
const { validationResult } = require('express-validator');
const { logError, logInfo } = require('../../../utils/logger');

// ...

async function resetPassword(req, res) {
  const { email, resetCode, newPassword } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logError(errors, res, 400);
    return;
  }

  try {
    const code = await VerificationCode.findOne({
      where: {
        resetCode: resetCode,
      },
    });

    if (!code) {
      logError('Código de redefinição de senha inválido', res, 400);
      return;
    }

    if (new Date() > code.expiresAt) {
      logError('Código de redefinição de senha expirou', res, 400);
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await user.update({
        password: hashedPassword,
      });

      await code.destroy();

      logInfo('Senha redefinida com sucesso', res, 200);
    } else {
      logError('Usuário não encontrado', res, 404);
    }
  } catch (err) {
    logError('Erro ao redefinir a senha: ' + err, res, 500);
  }
}

module.exports = { resetPasswordValidationRules, resetPassword };
