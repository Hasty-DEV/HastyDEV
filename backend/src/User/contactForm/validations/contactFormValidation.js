const { body } = require('express-validator');

const contactFormValidationRules = [
  body('Name').trim().isLength({ min: 3 }).withMessage('Nome precisa ter pelo menos 3 caracteres'),

  body('Email').trim().isEmail().withMessage('E-mail inválido'),

  body('Phone').trim().isLength({ min: 10 }).withMessage('Telefone inválido'),

  body('Category').notEmpty().withMessage('Categoria é obrigatória'),

  body('Subject').notEmpty().withMessage('Assunto é obrigatório'),
  
  body('Message').trim().isLength({ min: 10 }).withMessage('Mensagem deve ter pelo menos 10 caracteres'),
];

module.exports = contactFormValidationRules;
