const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserStep2 = (req, res) => {
  const values = [
    req.body.actionType,
    req.body.userId,
    req.body.country,
    req.body.state,
    req.body.city,
    req.body.education,
    req.body.occupation,
    req.body.annualIncome,
    req.body.residentialStatus,
    req.body.readyToSettleAbroad,
    req.body.college,
  ];
  executeStoredProcedure("sp_onPage2", [values]).then((result) => {
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

module.exports = createUserStep2;
