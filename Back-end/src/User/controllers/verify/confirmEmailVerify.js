const User = require('../../models/userModel');
const VerificationCode = require('../../models/verificationCodeModel');

async function PinVerify(req, res) {
  const { verificationCode, email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const code = await VerificationCode.findOne({
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
          return res.status(200).json({ message: 'Código de verificação válido.' });
        } else {
          return res.status(400).json({ error: 'Código de verificação expirado.' });
        }
      } else {
        return res.status(400).json({ error: 'Código de verificação inválido.' });
      }
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (err) {
    console.error('Erro ao verificar o código de verificação:' + err);
    return res.status(500).json({ error: 'Erro ao verificar o código de verificação.' });
  }
}

module.exports = PinVerify;
