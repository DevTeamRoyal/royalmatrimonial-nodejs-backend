const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getAdminEventList = (req, res) => {
  const values = [
    req.body.eventType,           // char(1) -> eventType
    req.body.eventReligion,       // int -> eventReligion
    req.body.eventOccupation,     // tinyint -> eventOccupation
    req.body.eventMaritalStatus,  // tinyint -> eventMaritalStatus
    req.body.eventCaste,          // int -> eventCaste
    req.body.eventCountry,        // int -> eventCountry
    req.body.eventState,          // int -> eventState
    req.body.eventCity,           // int -> eventCity
    req.body.eventStatus,         // char(1) -> eventStatus  -1 for 1st time call
    req.body.maxEventId,          // INT -> maxEventId
    req.body.limit                // INT -> limit
];

  executeStoredProcedure("sp_get_adminEventList", [values]).then((result) => {
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

module.exports = getAdminEventList;
