import { Request, Response } from "express";
import { logError, logInfo } from "../../../utils/Logger/Logger";
import { generatePinCode } from "../../../utils/PinGenerate/PinGenerate";
import User from "../../models/User/User.model";
import VerificationCode from "../../models/Email/EmailVerifyCode.model";
import * as nodemailer from "nodemailer";
import * as path from "path";
import * as fs from "fs";
import { EnvVariables } from "../../../config/env";

const mail = EnvVariables.mail;

class sendEmailVerification {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    const { email } = req.body;

    try {
      const emailCode = generatePinCode();
      const user = await User.findOne({ where: { email } });

      if (user) {
        await VerificationCode.destroy({ where: { userId: user.userid } });

        await VerificationCode.create({
          userId: user.userid,
          code: emailCode,
        });

        const transport = nodemailer.createTransport({
          host: "smtp.hostinger.com",
          port: 465,
          secure: true,
          auth: {
            user: mail.user,
            pass: mail.password,
          },
        });

        const emailHTMLPath = path.join(__dirname, "./emailConfirmation.html");
        const emailHTML = fs.readFileSync(emailHTMLPath, "utf8");
        const emailHTMLWithPIN = emailHTML.replace("@PIN_CODE", emailCode);

        await transport.sendMail({
          from: mail.user,
          to: email,
          subject: "Confirmação de email",
          html: emailHTMLWithPIN,
        });

        logInfo("Email de verificação enviado com sucesso.", res, 200);
      } else {
        logError("Usuário não encontrado.", res, 404);
      }
    } catch (error) {
      console.log(error);
      logError("Erro ao enviar email de verificação.", res, 500);
    }
  }
}

export default new sendEmailVerification();
