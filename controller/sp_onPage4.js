const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserStep4 = (req, res) => {
  if (req.body.actionType === "v") {
    executeStoredProcedure("sp_onPage4View", [req.body.userId]).then(
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
      req.body.mothersProfession,
      req.body.fathersProfession,
      req.body.sister,
      req.body.brother,
      req.body.gothra,
      req.body.familyStatus,
      req.body.familyIncome,
      req.body.familyType,
      req.body.familyNativeCountry,
      req.body.familyNativeState,
      req.body.familyNativeCity,
      req.body.livingWithParents,
    ];
    executeStoredProcedure("sp_onPage4", [values]).then((result) => {
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

module.exports = createUserStep4;
