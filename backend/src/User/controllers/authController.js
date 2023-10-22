const jwt = require("jsonwebtoken");
const { logError} = require('../../utils/logger.js');

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    logError("Acesso negado: Token não fornecido", res, 401);
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      logError("Token inválido", res, 403);
    }
    req.userid = decoded.id;  
    next();
  });
}

 function createRefreshToken(user) {
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_SECRET, {
    expiresIn: "7d",  
  });
  return refreshToken;
}

 function checkRefreshToken(req, res, next) {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    logError("Acesso negado: Token não fornecido", res, 401);
  }

  jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
    if (err) {
      logError("Token inválido", res, 403);
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = {
  createRefreshToken,
  checkRefreshToken,
  checkToken
};