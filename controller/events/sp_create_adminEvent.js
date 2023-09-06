const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createAdminEvent = (req, res) => {
  const values = [
    req.body.eventType, // char(1) -> eventType -- P -Physical ; O- Online
    req.body.eventTitle, // varchar(30)
    req.body.eventReligion, // int -> eventReligion
    req.body.eventOccupation, // tinyint -> eventOccupation
    req.body.eventMaritalStatus, // tinyint -> eventMaritalStatus
    req.body.eventCaste, // int -> eventCaste
    req.body.eventCountry, // int -> eventCountry
    req.body.eventState, // int -> eventState
    req.body.eventCity, // int -> eventCity
    req.body.eventAmount, // int -> eventAmount
    req.body.eventDatetime, // datetime -> eventDatetime
    req.body.eventStatus, // char(1) ->  -- A: active , I - Inactive , C-  cancelled
    req.body.eventVenue, // varchar(50) -> eventVenue Address of hotel,auditorium
    req.body.eventOnlineLink, // varchar(500) -> eventOnlineLink zoom link , meeting link
    req.body.eventDescription, // varchar(500) -> eventDescription free text
    req.body.eventMaxGuestsAllowed, // INT 1000
    req.body.eventExtraGuestPrice, // INT 500   
    req.body.eventMaxGuestsPerProfile, // INT 7
    req.body.eventCancellationAllowedDays, // INT
    req.body.eventCancellationCut, // INT 50
  ];

  executeStoredProcedure("sp_create_adminEvent", [values]).then((result) => {
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

module.exports = createAdminEvent;
