const PayU = require("payu-websdk");

const payuClient = new PayU({
  key: process.env.PAYU_KEY,
  salt: process.env.PAYU_SALT,
}, process.env.PAYU_ENV);

module.exports = payuClient;