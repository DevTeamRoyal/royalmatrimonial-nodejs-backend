const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getUserEvent = (req, res) => {
  const values = [
    req.body.userId,         // INT
    req.body.eventId,          // INT
];

  executeStoredProcedure("sp_get_userEvent", [values]).then((result) => {
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

module.exports = getUserEvent;
