import { body } from 'express-validator';
import filter from '../../../helpers/FilterWord/FilterWord.helper';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!¨%*#?&])[A-Za-z\d@$!%¨*#?&]/;

const contactFormValidationRules = [
  body('Name').trim().isLength({ min: 3 }).withMessage('Nome precisa ter pelo menos 3 caracteres'),

  body('Email').trim().isEmail().withMessage('E-mail inválido'),

  body('Phone').trim().isLength({ min: 10 }).withMessage('Telefone inválido'),

  body('Category').notEmpty().withMessage('Categoria é obrigatória'),

  body('Subject').notEmpty().withMessage('Assunto é obrigatório'),

  body('Message').trim().isLength({ min: 10 }).withMessage('Mensagem deve ter pelo menos 10 caracteres'),
];

const resetPasswordValidationRules = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('O email fornecido não é válido')
    .notEmpty()
    .withMessage('O campo de email é obrigatório'),

  body('resetCode')
    .notEmpty()
    .withMessage('O código de redefinição é obrigatório'),

  body('newPassword')
    .trim()
    .isLength({ min: 6 })
    .withMessage('A senha deve ter pelo menos 6 caracteres')
    .matches(passwordRegex)
    .withMessage('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial')
    .notEmpty()
    .withMessage('O campo de senha é obrigatório'),

  body('confirmNewPassword')
    .custom((value: any, { req }: any) => {
      if (value !== req.body.newPassword) {
        throw new Error('A confirmação de senha não coincide com a senha');
      }
      return true;
    })
    .notEmpty()
    .withMessage('O campo de confirmação de senha é obrigatório'),

];

const registrationValidationRules = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('O email fornecido não é válido')
    .notEmpty()
    .withMessage('O campo de email é obrigatório'),

  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('A senha deve ter pelo menos 6 caracteres')
    .matches(passwordRegex)
    .withMessage('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial')
    .notEmpty()
    .withMessage('O campo de senha é obrigatório'),

  body('username')
    .isLength({ min: 5 })
    .withMessage('O username deve ter pelo menos 5 caracteres')
    .trim()
    .notEmpty()
    .withMessage('O campo de nome de usuário é obrigatório')
    .custom((value: any) => {
      const containsForbiddenWord = filter.isProfane(value);
      if (containsForbiddenWord) {
        throw new Error('O username contém palavras proibidas ou inadequadas');
      }
      return true;
    }),

  body('first_name')
    .trim()
    .notEmpty()
    .withMessage('O campo de nome é obrigatório')
    .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
    .withMessage('O campo de primeiro nome não deve conter caracteres especiais')
    .customSanitizer((value: string) => value.toUpperCase())
    .custom((value: any) => {
      const containsForbiddenWord = filter.isProfane(value);
      if (containsForbiddenWord) {
        throw new Error('O nome contém palavras proibidas ou inadequadas');
      }
      return true;
    }),

  body('last_name')
    .trim()
    .notEmpty()
    .withMessage('O campo de nome é obrigatório')
    .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
    .withMessage('O campo de último nome não deve conter caracteres especiais')
    .customSanitizer((value: string) => value.toUpperCase())
    .custom((value: any) => {
      const containsForbiddenWord = filter.isProfane(value);
      if (containsForbiddenWord) {
        throw new Error('O sobrenome contém palavras proibidas ou inadequadas');
      }
      return true;
    }),]

const updateUserValidationRules = [
  body('username')
    .isLength({ min: 5 })
    .withMessage('O username deve ter pelo menos 5 caracteres')
    .trim()
    .notEmpty()
    .withMessage('O campo de nome de usuário é obrigatório')
    .custom((value: any) => {
      const containsForbiddenWord = filter.isProfane(value);
      if (containsForbiddenWord) {
        throw new Error('O username contém palavras proibidas ou inadequadas');
      }
      return true;
    }),

  body('first_name')
    .trim()
    .notEmpty()
    .withMessage('O campo de nome é obrigatório')
    .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
    .withMessage('O campo de primeiro nome não deve conter caracteres especiais')
    .customSanitizer((value: string) => value.toUpperCase())
    .custom((value: any) => {
      const containsForbiddenWord = filter.isProfane(value);
      if (containsForbiddenWord) {
        throw new Error('O nome contém palavras proibidas ou inadequadas');
      }
      return true;
    }),

  body('last_name')
    .trim()
    .notEmpty()
    .withMessage('O campo de nome é obrigatório')
    .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
    .withMessage('O campo de último nome não deve conter caracteres especiais')
    .customSanitizer((value: string) => value.toUpperCase())
    .custom((value: any) => {
      const containsForbiddenWord = filter.isProfane(value);
      if (containsForbiddenWord) {
        throw new Error('O sobrenome contém palavras proibidas ou inadequadas');
      }
      return true;
    }),
];


export default {
  registrationValidationRules,
  resetPasswordValidationRules,
  contactFormValidationRules,
  updateUserValidationRules
};