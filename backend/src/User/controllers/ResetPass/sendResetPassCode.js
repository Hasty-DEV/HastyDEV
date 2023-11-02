const User = require('../../models/userModel'); // Importe o modelo de usuário
const generatePinCode = require('../../../utils/PinGenerate');
const VerificationCode = require('../../models/resetPassCodeModel'); // Modelo para armazenar códigos de redefinição de senha
const nodemailer = require('nodemailer'); // Para envio de e-mails

async function sendPasswordResetEmail(req, res) {
  const { email } = req.body;

  try {
    // Verifique se o e-mail existe no banco de dados
    const user = await User.findOne({ where: { email } });

    if (user) {
      // Gere um código de redefinição de senha
      const resetCode = generatePinCode();

      const resetPassCode = {
        userId: user.userid,
        resetCode, // Defina o código gerado
        type: 'password_reset',
        expiresAt: new Date(Date.now() + 24 * 3600 * 1000), // Código expira em 24 horas
      };

      await VerificationCode.destroy({ where: { userId: user.userid } });
      // Associe o código ao usuário no banco de dados
      await VerificationCode.create(resetPassCode);

      // Configure o transporte de e-mail
      const transport = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER, // Substitua pelo seu usuário de e-mail
          pass: process.env.GMAIL_PASS, // Substitua pela sua senha de e-mail
        },
      });

      // Conteúdo do e-mail
      const emailContent = `
        Você solicitou a redefinição de senha.
        Use o código a seguir para redefinir sua senha: ${resetCode}
        Este código expirará em 24 horas.
      `;

      // Envie o e-mail de redefinição de senha para o usuário
      await transport.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Redefinição de Senha',
        text: emailContent,
      });

      // Informe ao usuário que o e-mail de redefinição de senha foi enviado com sucesso.
      return res.status(200).json({ message: 'E-mail de redefinição de senha enviado com sucesso.' });
    } else {
      // Informe ao usuário que o e-mail não foi encontrado.
      return res.status(404).json({ message: 'E-mail não encontrado.' });
    }
  } catch (err) {
    // Trate erros, como problemas de banco de dados ou envio de e-mail.
    console.error(err);
    return res.status(500).json({ message: 'Erro ao enviar e-mail de redefinição de senha.' });
  }
}

module.exports = sendPasswordResetEmail;
