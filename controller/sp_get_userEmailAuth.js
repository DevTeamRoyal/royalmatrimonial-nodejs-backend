const { executeStoredProcedure } = require("../helpers/storedProcedure"),
  { createToken, verifyToken } = require("../helpers/jwt"),
  { generateHashPwd, checkHashPwd } = require("../helpers/bcrypt");

const userEmailAuth = (req, res) => {
  const values = [req.body.emailid, req.body.password];
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

module.exports = userEmailAuth;
