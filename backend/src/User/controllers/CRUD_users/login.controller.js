const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");
const Token = require("../../models/tokens.model");
const { validationResult } = require('express-validator');
 
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000;

async function login(req, res) {
  try {
    const { username, password } = req.body;

    
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logError("Erros de validação no registro", res, 400);
    return;
  }
    // Buscar o usuário pelo nome de usuário
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "Usuário/Senha incorreta" });
    }

    if (user.lockUntil > Date.now()) {
      return res.status(403).json({ error: "Conta bloqueada" });
    }

    if (user.loginAttempts === MAX_LOGIN_ATTEMPTS) {
      user.lockUntil = Date.now() + LOCK_TIME;
    }

    if (user.loginAttempts === MAX_LOGIN_ATTEMPTS + 1) {
      user.loginAttempts = 0;
    }

    // Comparar a senha fornecida com a senha armazenada no banco de dados
    const senhaCorreta = await bcrypt.compare(password, user.password);

    if (senhaCorreta) {
      user.loginAttempts = 0;

      const user_id = user.dataValues.userid;
      const secret = process.env.SECRET;
      const token = jwt.sign({ id: user_id }, secret);

      const newToken = new Token({ user_id, token });
      await newToken.save();

      // Enviar o ID do usuário e o token como resposta JSON
 

      res.json({ id: user_id, token });
    } else {
      user.loginAttempts += 1;
      await user.save();
      return res.status(401).json({ error: "Usuário/Senha incorreta" });
    }
  } catch (err) {
    console.error("Erro ao consultar o banco de dados:", err);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}

module.exports = { login };
