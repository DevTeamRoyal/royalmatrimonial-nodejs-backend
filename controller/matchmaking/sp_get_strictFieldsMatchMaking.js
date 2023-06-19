const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getStrictMatchMaking = (req, res) => {
  const values = [
    req.body.userId,
    req.body.maxUserId,
    req.body.limit,
    req.body.viceVersa,
    req.body.excludedUsers,
  ];
  executeStoredProcedure("sp_get_strictFieldsMatchMaking", [values]).then(
    (result) => {
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
  );
};

module.exports = getStrictMatchMaking;
