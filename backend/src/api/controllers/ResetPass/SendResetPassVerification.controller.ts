import { Request, Response } from "express";
import nodemailer from "nodemailer";
import User from "../../models/User/User.model";
import { generatePinCode } from "../../../utils/PinGenerate/PinGenerate";
import ResetPassCode from "../../models/ResetPass/ResetPassCode.model";
import logger from "../../../utils/Logger/Logger";
import * as path from "path";
import * as fs from "fs";
import { EnvVariables } from "../../../config/env";

const mail = EnvVariables.mail;

class SendPasswordResetEmail {
  public async sendPasswordResetEmail(
    req: Request,
    res: Response
  ): Promise<void> {
    const { email } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (user) {
        const resetCode = generatePinCode();

        // Crie o objeto ResetPassCode com todos os atributos necessários
        await ResetPassCode.destroy({ where: { userId: user.userid } });

        if (user.userid !== undefined) {
          await ResetPassCode.create({
            userId: user.userid,
            resetCode,
            expiresAt: new Date(Date.now() + 24 * 3600 * 1000),
            createdAt: new Date(Date.now()),
          });
        } else {
          logger.error("O id do usuário é undefined");
          res.status(500).send("O id do usuário é undefined");
          return;
        }

        const transport = nodemailer.createTransport({
          host: "smtp.office365.com",
          port: 587,
          secure: false,
          auth: {
            user: mail.user,
            pass: mail.password,
          },
        });

        const emailHTMLPath = path.join(
          __dirname,
          "./resetPassConfirmation.html"
        );
        const emailHTML = fs.readFileSync(emailHTMLPath, "utf8");
        const emailHTMLWithPIN = emailHTML.replace("@PIN_CODE", resetCode);

        await transport.sendMail({
          from: process.env.GMAIL_USER,
          to: email,
          subject: "Redefinição de Senha",
          html: emailHTMLWithPIN,
        });

        logger.info("E-mail de redefinição de senha enviado com sucesso");
        res.status(200).send("E-mail de redefinição de senha enviado com sucesso");
      } else {
        logger.error("E-mail não encontrado");
        res.status(404).send("E-mail não encontrado");
      }
    } catch (err) {
      console.error(err);
      logger.error(
        "Erro ao enviar e-mail de redefinição de senha: " + err
      );
      res.status(500).send("Erro ao enviar e-mail de redefinição de senha");
    }
  }
}

export default new SendPasswordResetEmail();

