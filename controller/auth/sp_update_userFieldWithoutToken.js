const { executeStoredProcedure } = require("../../helpers/storedProcedure");
const updateUserFieldWithoutToken = (req, res) => {
  const values = [req.body.userId, req.body.fieldName, req.body.valueString];
  executeStoredProcedure("sp_update_userField", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json({ ...result["0"] });
    } else {
      try {
        res.json({
          ...result["0"],
          status: 200,
          jsonResponse: {
            msg: "Password updated",
          },
        });
      } catch (error) {
        throw error;
      }
    }
  });
};
module.exports = updateUserFieldWithoutToken;
