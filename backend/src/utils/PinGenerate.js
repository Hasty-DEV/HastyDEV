const crypto = require('crypto');

function generatePinCode() {
  const code = crypto.randomBytes(3).toString('hex').toUpperCase();
  return code;
}

module.exports = generatePinCode;
