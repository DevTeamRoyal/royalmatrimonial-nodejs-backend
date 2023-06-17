const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createUserStep2 = (req, res) => {
  if (req.body.actionType === "v") {
    executeStoredProcedure("sp_onPage2View", [req.body.userId]).then(
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
            res.send(error);
          }
        }
      }
    );
  } else {
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
  }
};

module.exports = createUserStep2;
