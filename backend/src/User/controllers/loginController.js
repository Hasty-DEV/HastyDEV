const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { logError, logInfo } = require("../../utils/logger");
const Token = require("../token/tokensModel");

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000;

async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Buscar o usuário pelo nome de usuário
    const user = await User.findOne({ where: { username } });

    if (!user) {
      logError("Usuário/Senha incorreta", res, 401);
      return;
    }

    if (user.lockUntil > Date.now()) {
      logError("Conta bloqueada", res, 403);
      return;
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

      res.json({ token, user: { id: user_id } });
    } else {
      user.loginAttempts += 1;
      await user.save();
      logError("Usuário/Senha incorreta", res, 401);
    }
  } catch (err) {
    logError("Erro ao consultar o banco de dados: " + err, res);
  }
}

module.exports = { login };
