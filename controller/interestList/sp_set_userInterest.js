const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const setUserInterest = (req, res) => {
  const values = [req.body.fromUserid, req.body.toUserid, req.body.status]; // Y active shortlist , N remove shortlist
  executeStoredProcedure("sp_set_userInterest", [values]).then((result) => {
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
  });
};

module.exports = setUserInterest;
