const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { logError, logInfo } = require('../../utils/logger');

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000;

 

function login(req, res) {
  const { username, password } = req.body;

  // Buscar o usuário pelo nome de usuário
  User.findOne({ where: { username } })
    .then((user) => {
      if (!user) {
        logError("Usuário/Senha incorreta", res, 401);
        return;
      }

      if (user.lockUntil > Date.now()) {
        // A conta está bloqueada
        //const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 1000);
        //logInfo("Conta bloqueada. Tente novamente em " + remainingTime + " segundos");
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
      bcrypt.compare(password, user.password, (err, senhaCorreta) => {
        if (err) {
          logError("Erro ao comparar senhas criptografadas: " + err, res, 500);
          return;
        }

        if (senhaCorreta) {
          user.loginAttempts = 0;
          logInfo("Usuário logado com sucesso");

          const secret = process.env.SECRET;

          const token = jwt.sign({ id: user.id }, secret);

          res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
        } else {
          user.loginAttempts += 1;
          user.save().then(() => {
             logError("Usuário/Senha incorreta", res, 401);
          });
        }
      });
    })
    .catch((err) => {
      logError("Erro ao consultar o banco de dados: " + err, res);
    });
}

module.exports = { login };