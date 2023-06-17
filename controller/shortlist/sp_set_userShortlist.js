const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const setUserShortlist = (req, res) => {
  const values = [req.body.userId, req.body.useridShortlist, req.body.status]; // Y active shortlist , N remove shortlist
  executeStoredProcedure("sp_set_userShortlist", [values]).then((result) => {
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

module.exports = setUserShortlist;
