const { executeStoredProcedure } = require("../../helpers/storedProcedure");
const { verifyToken } = require("../../helpers/jwt");

const updateUserField = (req, res) => {
  const values = [req.body.userId, req.body.fieldName, req.body.valueString];
  const isTokenVerify = verifyToken(req.body.token);
  if (isTokenVerify) {
    executeStoredProcedure("sp_update_userField", [values]).then((result) => {
      if (result["0"]["output"] < 0) {
        res.json({ ...result["0"] });
      } else {
        try {
          res.json({
            ...result["0"],
            status: 200,
            jsonResponse: JSON.parse(result["0"].jsonResponse),
            token: result["0"].jsonResponse ? token : null,
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
