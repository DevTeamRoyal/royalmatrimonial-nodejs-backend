const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createUserStep3 = (req, res) => {
  if (req.body.actionType === "v") {
    executeStoredProcedure("sp_onPage3View", [req.body.userId]).then(
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
      req.body.diet,
      req.body.smoking,
      req.body.drinking,
      req.body.lovePets,
      req.body.ownsHouse,
      req.body.ownsCar,
      req.body.bloodGroup,
      req.body.thalassemia,
      req.body.religiousBelief,
      req.body.cartype,
      req.body.housetype,
    ];
    executeStoredProcedure("sp_onPage3", [values]).then((result) => {
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

module.exports = createUserStep3;
