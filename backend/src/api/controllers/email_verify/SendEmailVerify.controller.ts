import { Request, Response } from "express";
import nodemailer from "nodemailer";
import User from "../../models/User.model";
import { generatePinCode } from "../../../utils/PinGenerate/PinGenerate";
import fs from "fs";
import path from "path";
import { logError, logInfo } from "../../../utils/Logger/Logger";
import EmailVerifyCode from "../../models/EmailVerifyCode.model";

async function sendVerificationEmail(
  req: Request,
  res: Response
): Promise<void> {
  const { email } = req.body as { email: string };

  try {
    const emailCode = generatePinCode();
    const user = await User.findOne({ where: { email } });

    if (user) {
      // Remova os códigos de verificação existentes para o usuário
      await EmailVerifyCode.destroy({ where: { userId: user.userid } });

      // Crie um novo código de verificação
      await EmailVerifyCode.create({
        userId: user.userid,
        code: emailCode,
      });

      // Configure o transporte do email
      const transport = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER!,
          pass: process.env.GMAIL_PASS!,
        },
      });

      // Leia o conteúdo do email de um arquivo
      const emailHTMLPath = path.join(__dirname, "./emailConfirmation.html");
      const emailHTML = fs.readFileSync(emailHTMLPath, "utf8");
      const emailHTMLWithPIN = emailHTML.replace("@PIN_CODE", emailCode); // Ajuste aqui

      // Envie o email de verificação
      await transport.sendMail({
        from: process.env.GMAIL_USER!,
        to: email,
        subject: "Confirmação de email",
        html: emailHTMLWithPIN,
      });

      logInfo("Email de verificação enviado com sucesso.", res, 200);
    } else {
      logError("Usuário não encontrado.", res, 404);
    }
  } catch (err) {
    console.log(err);
    logError("Erro ao enviar email de verificação.", res, 500);
  }
}

export default sendVerificationEmail;
