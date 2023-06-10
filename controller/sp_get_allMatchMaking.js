const { executeStoredProcedure } = require("../helpers/storedProcedure");

const getAllMatchMaking = (req, res) => {
  const values = [
    req.body.userId,
    req.body.maxUserId,
    req.body.limit,
    req.body.viceVersa,
  ];
  executeStoredProcedure("sp_get_allMatchMaking", [values]).then((result) => {
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

module.exports = getAllMatchMaking;
