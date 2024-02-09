import { Request, Response } from "express";
import { validationResult, Result, ValidationError } from "express-validator";
import nodemailer from "nodemailer";
import { logError, logInfo } from "../../../utils/Logger/Logger";
import { contactFormValidationRules } from "../validations/Validations.controller";

const handleContactForm = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages: string[] = errors.array().map((error) => error.msg);
    logError(errorMessages.join(", "), res, 422);
    return;
  }

  const { Name, Email, Phone, Category, Subject, Message } = req.body;

  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_PASS!,
    },
  });

  try {
    await transport.sendMail({
      from: process.env.GMAIL_USER!,
      to: process.env.GMAIL_USER!,
      subject: `Nova mensagem de ${Name}`,
      text: `De: ${Name}\nEmail: ${Email}\nTelefone: ${Phone}\nCategoria: ${Category}\nAssunto: ${Subject}\nMensagem: ${Message}`,
    });

    logInfo("E-mail enviado com sucesso", res, 200);
  } catch (error) {
    logError("Erro ao enviar o e-mail", res, 500);
  }
};

export { handleContactForm, contactFormValidationRules };
