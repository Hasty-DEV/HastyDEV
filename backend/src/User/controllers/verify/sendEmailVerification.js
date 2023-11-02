const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../../models/userModel');
const emailVerifyCode = require('../../models/emailVerifyCodeModel');
const generatePinCode = require('../../../utils/PinGenerate');
const fs = require('fs');
const path = require('path');
const { logError, logInfo } = require('../../../utils/logger');

async function sendVerificationEmail(req, res) {
  const { email } = req.body;

  try {
    const emailVerifyCode = generatePinCode();
    const user = await User.findOne({ where: { email } });

    if (user) {
      // Remova os códigos de verificação existentes para o usuário
      await emailVerifyCode.destroy({ where: { userId: user.userid } });

      // Crie um novo código de verificação
       await emailVerifyCode.create({
        userId: user.userid,
        code: emailVerifyCode,
      });

      // Configure o transporte do email
      const transport = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      // Leia o conteúdo do email de um arquivo
      const emailHTMLPath = path.join(__dirname, 'emailConfirmation.html');
      const emailHTML = fs.readFileSync(emailHTMLPath, 'utf8');
      const emailHTMLWithPIN = emailHTML.replace('@PIN_CODE', emailVerifyCode);

      // Envie o email de verificação
      await transport.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Confirmação de email',
        html: emailHTMLWithPIN,
      });

      logInfo('Email de verificação enviado com sucesso.', res, 200);
    } else {
      logError('Usuário não encontrado.', res, 404);
    }
  } catch (err) {
    logError('Erro ao enviar email de verificação.', res, 500);
  }
}

module.exports = sendVerificationEmail;