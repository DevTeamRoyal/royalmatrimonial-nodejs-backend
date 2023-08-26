const { executeNoParamStoredProcedure } = require("../../helpers/storedProcedure");

const getGetPackageList = (req, res) => {
  executeNoParamStoredProcedure("sp_get_packageList").then(
    (result) => {
      if (result["0"]["output"] < 0) {
        res.json(result);
      } else {
        try {
          res.json({
            ...result["0"],
            jsonResponse: JSON.parse(result["0"].jsonResponse),
            status: 200,
          });
        } catch (error) {
          throw error;
        }
      }
    }
  );
};

module.exports = getGetPackageList;
