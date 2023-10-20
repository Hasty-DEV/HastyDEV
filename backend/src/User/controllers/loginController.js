const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pino = require("pino")();
const User = require("../models/userModel");  


const MAX_LOGIN_ATTEMPTS = 5;  
const LOCK_TIME = 15 * 60 * 1000;  

function login(req, res) {
  const { username, password } = req.body;

  // Buscar o usuário pelo nome de usuário
  User.findOne({ where: { username } })
    .then((user) => {
      if (!user) {
        pino.info("Usuário não encontrado");
        
        return res.status(401).json({ error: "Usuário/Senha incorreta" });
      }

      if (user.lockUntil > Date.now()) {
        // A conta está bloqueada
        const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 1000);
        pino.info("Conta bloqueada. Tente novamente em " + remainingTime + " segundos.");
 
        // return res.status(401).json({ error:  "Conta bloqueada. Tente novamente em " + remainingTime + " segundos." });
        return res.status(403).json({ error:  "Conta bloqueada" });
      }
      
      // Se as tentativas atingiram o limite, bloqueie a conta
      if (user.loginAttempts === MAX_LOGIN_ATTEMPTS) {
        user.lockUntil = Date.now() + LOCK_TIME;
      }

      if (user.loginAttempts === (MAX_LOGIN_ATTEMPTS + 1)){
        user.loginAttempts = 0
      }
      
      // Comparar a senha fornecida com a senha armazenada no banco de dados
      bcrypt.compare(password, user.password, (err, senhaCorreta) => {
        if (err) {
          pino.error("Erro ao comparar senhas criptografadas:" + err);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }

        if (senhaCorreta) {
          user.loginAttempts = 0;
       
          pino.info("Usuário logado com sucesso");
      
          const secret = process.env.SECRET;
      
          const token = jwt.sign({ id: user.id }, secret);
      
          return res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
        }
        
        user.loginAttempts += 1;

        user.save().then(() => {
          pino.info("Senha incorreta. Tentativa " + user.loginAttempts + " de " + MAX_LOGIN_ATTEMPTS);
          
          // return res.status(401).json({ error:  "Senha incorreta. Tentativa " + user.loginAttempts + " de " + MAX_LOGIN_ATTEMPTS });
          return res.status(401).json({ error:  "Usuário/Senha incorreta" });
        });
      });
    })
    .catch((err) => {
      pino.error("Erro ao consultar o banco de dados:" + err);
      res.status(500).json({ error: "Erro interno do servidor" });
    });
}

module.exports = { login };
