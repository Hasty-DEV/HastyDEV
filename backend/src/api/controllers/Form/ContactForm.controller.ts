import { validationResult, Result, ValidationError } from "express-validator";
import { Request, Response } from "express";
import logger from "../../../utils/Logger/Logger";
import * as nodemailer from "nodemailer";
import { EnvVariables } from "../../../config/env";
import validationRules from "../Validation/validations.controller";

const mail = EnvVariables.mail;

class ContactForm {
  public async sendContactForm(req: Request, res: Response): Promise<void> {
    await Promise.all(validationRules.contactFormValidationRules.map(rule => rule.run(req)));

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      logger.error(`Erro no envio da mensagem: ${errorMessages.join(', ')}`);
      res.status(400).json({ error: `Erro no envio da mensagem: ${errorMessages.join(', ')}` });
      return;
    }

    const { Name, Email, Phone, Category, Subject, Message } = req.body;

    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: mail.user,
        pass: mail.password,
      },
    });

    try {
      await transport.sendMail({
        from: mail.user,
        to: mail.user,
        subject: `Nova mensagem de ${Name}`,
        text: `De: ${Name}\nEmail: ${Email}\nTelefone: ${Phone}\nCategoria: ${Category}\nAssunto: ${Subject}\nMensagem: ${Message}`,
      });

      logger.info("E-mail enviado com sucesso");
      res.status(200).send();
    } catch (error: any) {
      logger.error("Erro ao enviar o e-mail", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new ContactForm();
