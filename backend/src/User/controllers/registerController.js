const bcrypt = require("bcrypt");
const { validationResult } = require('express-validator');
const User = require('../models/userModel');
const { registrationValidationRules } = require('../validations/userValidation');
const { logError, logInfo } = require('../../utils/logger');

const saltRounds = 10;

 
async function register(req, res) {
  const { username, email, password, confirmPassword, first_name, last_name } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logError("Erros de validação no registro", res, 400);
    return;
  }

  if (password !== confirmPassword) {
    logError('A senha e a confirmação de senha não coincidem', res, 400);
    return;
  }

  let existingUserByUsername;
  let existingUserByEmail;

  try {
    // Verifica se o nome de usuário já está em uso
    existingUserByUsername = await User.findOne({ where: { username: username } });

    // Verifica se o email já está em uso
    existingUserByEmail = await User.findOne({ where: { email: email } });

  } catch (err) {
    // Erro ao consultar o banco de dados
    logError("Erro ao consultar o banco de dados: " + err, res, 500);
    return;
  }

  if (existingUserByUsername) {
    // Nome de usuário já está em uso
    logError("Nome de usuário já em uso", res, 400);
    return;
  } else if (existingUserByEmail) {
    // Email já está em uso
    logError("Email já em uso", res, 400);
    return;
  }

  try {
    // Hash da senha para proteger
    const hash = await bcrypt.hash(password, saltRounds);

    // Inserir dados no banco de dados usando o modelo de usuário
    await User.create({
      username: username,
      password: hash,
      email: email,
      first_name: first_name,
      last_name: last_name,
    });

    // Registro bem-sucedido
    logInfo("Cadastrado com sucesso", res, 200);
  } catch (err) {
    // Erro ao inserir dados no banco de dados
    logError("Erro ao inserir dados no banco de dados: " + err, res, 500);
  }
}

module.exports = { registrationValidationRules, register };