const { executeStoredProcedure } = require("../helpers/storedProcedure"),
  { createToken, verifyToken } = require("../helpers/jwt"),
  { generateHashPwd, checkHashPwd } = require("../helpers/bcrypt");

const userSignUp = (req, res) => {
  const hashedPwd = generateHashPwd(req.body.password);
  const [emailVerify, profilePlatform] = ["N", "1"];
  const { countryCode } = req.body;
  const mobileWithCountryCode = countryCode.replace("+", "");
  const values = [
    req.body.emailid,
    mobileWithCountryCode,
    req.body.mobile,
    hashedPwd,
    emailVerify,
    profilePlatform,
  ];
  const token = createToken({ ...values });
  executeStoredProcedure("sp_create_userLogin", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          status: 200,
          token,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = userSignUp;
