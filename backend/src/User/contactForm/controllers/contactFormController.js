const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { logError, logInfo } = require('../../../utils/logger'); // Substitua com o caminho correto do seu arquivo de logging

const handleContactForm = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logError( errors, res, 422);
    return;
  }

  const { Name, Email, Phone, Category, Subject, Message } = req.body;

  // Configure seu transporte de e-mail com suas próprias credenciais e configurações
  const transport = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Enviar o e-mail
     await transport.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,  
      subject: `Nova mensagem de ${Name}`,
      text: `De: ${Name}\nEmail: ${Email}\nTelefone: ${Phone}\nCategoria: ${Category}\nAssunto: ${Subject}\nMensagem: ${Message}`,
    });

    logInfo('E-mail enviado com sucesso', res, 200);
  } catch (error) {
    logError('Erro ao enviar o e-mail', res, 500);
  }
};

module.exports = handleContactForm;
