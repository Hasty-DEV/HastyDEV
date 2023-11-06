const { body } = require('express-validator');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!¨%*#?&])[A-Za-z\d@$!%¨*#?&]/;

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
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('A confirmação de senha não coincide com a senha');
      }
      return true;
    })
    .notEmpty()
    .withMessage('O campo de confirmação de senha é obrigatório'),

  // Adicione a validação para a confirmação da nova senha aqui, se necessário.
];

module.exports = resetPasswordValidationRules;  // Exporte apenas as regras de validação
