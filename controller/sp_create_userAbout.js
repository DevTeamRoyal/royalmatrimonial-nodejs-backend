const { executeStoredProcedure } = require("../helpers/storedProcedure");

const createUserAbout = (req, res) => {
  const values = [
    req.body.userId,
    req.body.profileFor,
    req.body.basicIntro,
    req.body.family,
    req.body.career,
    req.body.education,
  ];
  executeStoredProcedure("sp_create_userAbout", [values]).then((result) => {
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

module.exports = createUserAbout;
