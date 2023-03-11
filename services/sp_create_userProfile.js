const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserProfile = (req, res) => {
  const values = [
    req.body.userId,
    req.body.gender,
    req.body.fullName,
    req.body.maritalStatus,
    req.body.kycStatus,
    req.body.dob,
    req.body.heightInCm,
    req.body.country,
    req.body.state,
    req.body.city,
    req.body.pincode,
    req.body.education,
    req.body.occupation,
    req.body.annualIncome,
    req.body.childrenStatus,
    req.body.motherTongue,
    req.body.religion,
    req.body.caste,
    req.body.residentialstatus,
    req.body.manglik,
    req.body.diet,
    req.body.smoking,
    req.body.drinking,
    req.body.readyToSettleAbroad,
    req.body.challenged,
    req.body.hiv,
    req.body.photo,
  ];
  executeStoredProcedure("sp_create_userProfile", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          status: 200,
          token,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = createUserProfile;
