const bcrypt = require("bcrypt");
const saltRounds = 10;

const generateHashPwd = (password) => bcrypt.hashSync(password, saltRounds)

const checkHashPwd = (password) => {
  const result = bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      console.error("Error while checking the password:", err);
      return;
    }
    return result;
  });
  return result;
};

module.exports = { generateHashPwd, checkHashPwd };
