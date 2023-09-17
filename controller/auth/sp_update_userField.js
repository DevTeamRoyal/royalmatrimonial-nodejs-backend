const { executeStoredProcedure } = require("../../helpers/storedProcedure");
const { verifyToken } = require("../../helpers/jwt");
const { generateHashPwd } = require("../../helpers/bcrypt");

const updateUserField = (req, res) => {
  let hashedPwd;
  const isTokenVerify = verifyToken(req.body.token);
  const values = [req.body.userId, req.body.fieldName];
  if (isTokenVerify) {
    if(req.body.fieldName === 'password'){
      hashedPwd = generateHashPwd(req.body.valueString);
    }
    executeStoredProcedure("sp_update_userField", [...values, hashedPwd]).then((result) => {
      if (result["0"]["output"] < 0) {
        res.json({ ...result["0"] });
      } else {
        try {
          res.json({
            ...result["0"],
            status: 200,
            jsonResponse: { msg: "Password updated" }
          });
        } catch (error) {
          throw error;
        }
      }
    });
  } else {
    res.json({
      status: 404,
      message: "invalid token",
    });
  }
};

module.exports = updateUserField;
