const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserPartnerPref = (req, res) => {
  const values = [
    req.body.userId,
    req.body.ageGreaterThan,
    req.body.ageLessThan,
    req.body.heightGreaterThan,
    req.body.heightLessThan,
    req.body.country,
    req.body.state,
    req.body.city,
    req.body.education,
    req.body.occupation,
    req.body.annualIncomeGreaterThan,
    req.body.maritalStatus,
    req.body.religion,
    req.body.motherTongue,
    req.body.caste,
    req.body.residentialStatus,
    req.body.manglik,
    req.body.diet,
    req.body.smoking,
    req.body.drinking,
    req.body.readyToSettleAbroad,
    req.body.challenged,
    req.body.childrenStatus,
    req.body.hiv,
    req.body.horoscopeMatch,
    req.body.mandatoryFields,
  ];
  executeStoredProcedure("sp_create_userPartnerPref", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          status: 200,
          jsonResponse: JSON.parse(result["0"].jsonResponse),
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = createUserPartnerPref;
