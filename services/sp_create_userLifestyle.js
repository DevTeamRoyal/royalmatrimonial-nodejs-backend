const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserLifestyle = (req, res) => {
  const values = [
    req.body.userId,
    req.body.isLovePets,
    req.body.isOwnsHouse,
    req.body.isOwnsCar,
    req.body.bloodGroup,
    req.body.thalassemia,
    req.body.religiousBelief,
  ];
  executeStoredProcedure("sp_create_userLifestyle", [values]).then(
    (result) => {
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
    }
  );
};

module.exports = createUserLifestyle;
