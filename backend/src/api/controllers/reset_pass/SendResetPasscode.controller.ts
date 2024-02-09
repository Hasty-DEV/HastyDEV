import { Request, Response } from "express";
import nodemailer from "nodemailer";
import User from "../../models/User.model";
import { generatePinCode } from "../../../utils/PinGenerate/PinGenerate";
import ResetPassCode from "../../models/ResetPasscode.model";
import { logError, logInfo } from "../../../utils/Logger/Logger";

async function sendPasswordResetEmail(
  req: Request,
  res: Response
): Promise<void> {
  const { email } = req.body;

  try {
    // Verifique se o e-mail existe no banco de dados
    const user = await User.findOne({ where: { email } });

    if (user) {
      // Gere um código de redefinição de senha
      const resetCode = generatePinCode();

      // Crie uma instância do modelo ResetPassCode
      const resetPassCodeInstance = await ResetPassCode.build({
        userId: user.userid,
        resetCode, // Defina o código gerado
        type: "password_reset",
        expiresAt: new Date(Date.now() + 24 * 3600 * 1000), // Código expira em 24 horas
      });

      // Remova códigos de redefinição anteriores para este usuário
      await ResetPassCode.destroy({ where: { userId: user.userid } });

      // Salve a instância no banco de dados
      await resetPassCodeInstance.save();

      // Configure o transporte de e-mail
      const transport = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER!, // Substitua pelo seu usuário de e-mail
          pass: process.env.GMAIL_PASS!, // Substitua pela sua senha de e-mail
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
        from: process.env.GMAIL_USER!,
        to: email,
        subject: "Redefinição de Senha",
        text: emailContent,
      });

      // Informe ao usuário que o e-mail de redefinição de senha foi enviado com sucesso.
      logInfo("E-mail de redefinição de senha enviado com sucesso", res, 200);
    } else {
      // Informe ao usuário que o e-mail não foi encontrado.
      logError("E-mail não encontrado", res, 404);
    }
  } catch (err) {
    // Trate erros, como problemas de banco de dados ou envio de e-mail.
    console.error(err);
    logError("Erro ao enviar e-mail de redefinição de senha: " + err, res, 500);
  }
}

export default sendPasswordResetEmail;
