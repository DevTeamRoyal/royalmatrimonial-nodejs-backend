const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getSearchMatchMaking = (req, res) => {
  const values = [
    req.body.userId,
    req.body.maritalStatus,
    req.body.ageGreaterThan,
    req.body.ageLessThan,
    req.body.heightGreaterThan,
    req.body.heightLessThan,
    req.body.country,
    req.body.state,
    req.body.city,
    req.body.education,
    req.body.occupation,
    req.body.annualIncome,
    req.body.childrenStatus,
    req.body.motherTongue,
    req.body.religion,
    req.body.caste,
    req.body.residentialStatus,
    req.body.manglik,
    req.body.diet,
    req.body.smoking,
    req.body.drinking,
    req.body.readyToSettleAbroad,
    req.body.challenged,
    req.body.hiv,
    req.body.mandatoryFields,
    req.body.maxUserId,
    req.body.limit,
    req.body.viceVersaFlag,
    req.body.excludedUsers,
  ];
  executeStoredProcedure("sp_get_searchMatchMaking", [values]).then(
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
          throw error;
        }
      }
    }
  );
};

module.exports = getSearchMatchMaking;
