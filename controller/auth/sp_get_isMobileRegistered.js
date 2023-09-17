const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const isMobileRegistered = (req, res) => {
  const values = [req.body.mobileWithIsd];
  executeStoredProcedure("sp_get_isMobileRegistered", [values]).then(
    (result) => {
      if (result["0"]["output"] < 0) {
        res.json({
          ...result["0"],
          status: 403,
          jsonResponse: JSON.parse(result["0"].jsonResponse),
        });
      } else {
        try {
          res.json({
            ...result["0"],
            status: 200,
            jsonResponse: JSON.parse(result["0"].jsonResponse),
          });
        } catch (error) {
          throw error;
        }
      }
    }
  );
};

module.exports = isMobileRegistered;
