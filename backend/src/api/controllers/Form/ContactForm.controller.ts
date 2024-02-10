import { validationResult, Result, ValidationError } from "express-validator";
import { Request, Response } from "express";
import { logError, logInfo } from "../../../utils/Logger/Logger";
import * as nodemailer from "nodemailer";
import { EnvVariables } from "../../../config/env";

const mail = EnvVariables.mail

class ContactForm {
  public async sendContactForm(req: Request, res: Response): Promise<void> {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      const errorsArray = errors.array();
      const errorMessages = errorsArray.map((error) => error.msg).join(", ");
      logError(errorMessages, res, 422);
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

      logInfo("E-mail enviado com sucesso", res, 200);
    } catch (error) {
      logError("Erro ao enviar o e-mail", res, 500);
    }
  }
}

export default new ContactForm();
