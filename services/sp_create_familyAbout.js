const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserFamilyAbout = (req, res) => {
  const values = [
    req.body.userId,
    req.body.profileHandlerName,
    req.body.mother,
    req.body.father,
    req.body.sister,
    req.body.brother,
    req.body.gothra,
    req.body.familyStatus,
    req.body.familyIncome,
    req.body.familyType,
    req.body.familyBasedOutOf,
    req.body.city,
    req.body.livingWithParents,
  ];
  executeStoredProcedure("sp_create_userFamilyAbout", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          status: 200,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = createUserFamilyAbout;
