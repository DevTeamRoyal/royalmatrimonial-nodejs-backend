const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserStep5 = (req, res) => {
  if (req.body.actionType === "v") {
    executeStoredProcedure("sp_onPage5View", [req.body.userId]).then(
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
      req.body.aboutCareer,
      req.body.aboutFamily,
      req.body.aboutEducation,
      req.body.basicIntro,
    ];
    executeStoredProcedure("sp_onPage5", [values]).then((result) => {
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

module.exports = createUserStep5;
