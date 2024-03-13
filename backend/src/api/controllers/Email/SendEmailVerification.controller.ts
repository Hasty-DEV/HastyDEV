import { Request, Response } from "express";
import logger from "../../../utils/Logger/Logger";
import { generatePinCode } from "../../../utils/PinGenerate/PinGenerate";
import User from "../../models/User/User.model";
import VerificationCode from "../../models/Email/EmailVerifyCode.model";
import * as nodemailer from "nodemailer";
import * as path from "path";
import * as fs from "fs";
import { EnvVariables } from "../../../config/env";

const mail = EnvVariables.mail;

class SendEmailVerificationController {
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

        logger.info("Email de verificação enviado com sucesso.");
        res.status(200).send("Email de verificação enviado com sucesso.");
      } else {
        logger.error("Usuário não encontrado.");
        res.status(404).send("Usuário não encontrado.");
      }
    } catch (error) {
      console.error(error);
      logger.error("Erro ao enviar email de verificação.");
      res.status(500).send("Erro ao enviar email de verificação.");
    }
  }
}

export default new SendEmailVerificationController();
