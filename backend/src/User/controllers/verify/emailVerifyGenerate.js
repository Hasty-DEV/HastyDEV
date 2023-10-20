const crypto = require('crypto');

function generateVerificationCode() {
  const code = crypto.randomBytes(3).toString('hex').toUpperCase();
  return code;
}

module.exports = generateVerificationCode;
