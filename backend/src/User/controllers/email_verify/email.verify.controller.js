const User = require('../../models/user.model');
const emailVerifyCode = require('../../models/email.verify.code.model');
const { logError, logInfo } = require('../../../utils/logger');  

async function emailVerification(req, res) {
  const { verificationCode, email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const code = await emailVerifyCode.findOne({
        where: { userId: user.userid, code: verificationCode },
      });

      if (code) {
  
        const currentTime = new Date();
        const codeTime = code.createdAt;
        const timeDifference = currentTime - codeTime;
        const codeExpirationTime = 10 * 60 * 1000; // 10 minutos em milissegundos

        if (timeDifference <= codeExpirationTime) {
          user.isVerified = true;
          await user.save();
          logInfo('Código de verificação válido', res, 200);
        } else {
          logError('Código de verificação expirado', res, 400);
        }
      } else {
        logError('Código de verificação inválido', res, 400);
      }
    } else {
      logError('Usuário não encontrado', res, 404);
    }
  } catch (err) {
    logError('Erro ao verificar o código de verificação: ' + err, res, 500);
  }
}

module.exports = emailVerification;
