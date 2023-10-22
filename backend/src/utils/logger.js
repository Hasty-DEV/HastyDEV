
const pino = require("pino")();

function logError(message, res, statusCode = 500) {
  pino.error(message);
  res.status(statusCode).json({ error: message });
}

function logInfo(message, res, statusCode = 200) {
  pino.info(message);
  res.status(statusCode).json({ info: message });
}

module.exports = {
  logError,
  logInfo,
};