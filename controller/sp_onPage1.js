const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserStep1 = (req, res) => {
  const values = [
    req.body.actionType,
    req.body.userId,
    req.body.profilefor,
    req.body.selectgender,
    req.body.fullname,
    req.body.maritalstatus,
    req.body.dob,
    req.body.height,
    req.body.childrenstatus,
    req.body.mothertongue,
    req.body.religion,
    req.body.cast,
    req.body.isManglik,
    req.body.challenged,
    req.body.isHiv,
    req.body.profilepic,
    req.body.profileHandlerName,
  ];
  executeStoredProcedure("sp_onPage1", [values]).then((result) => {
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

module.exports = createUserStep1;
