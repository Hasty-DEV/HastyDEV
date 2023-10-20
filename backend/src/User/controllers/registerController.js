const bcrypt = require("bcrypt");
const { validationResult } = require('express-validator');
const pino = require("pino")();
const User = require('../models/userModel');
const { registrationValidationRules } = require('./validations/userValidation');

const saltRounds = 10;

async function register(req, res) {
  const { username, email, password, confirmPassword, first_name, last_name } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'A senha e a confirmação de senha não coincidem' });
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
    pino.error("Erro ao consultar o banco de dados:" + err);
    return res.status(500).json({ error: "Erro ao consultar o banco de dados" });
  }

  if (existingUserByUsername) {
    // Nome de usuário já está em uso
    pino.info("Nome de usuário já em uso");
    return res.status(400).json({ error: "Nome de usuário já em uso" });
  } else if (existingUserByEmail) {
    // Email já está em uso
    pino.info("Email já em uso");
    return res.status(400).json({ error: "Email já em uso" });
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
    pino.info("Cadastrado com sucesso");
    return res.status(200).json({ message: "Cadastrado com sucesso" });
  } catch (err) {
    // Erro ao inserir dados no banco de dados
    pino.error("Erro ao inserir dados no banco de dados:" + err);
    return res.status(500).json({ error: "Erro Interno do servidor" });
  }
}

module.exports = { registrationValidationRules, register };
