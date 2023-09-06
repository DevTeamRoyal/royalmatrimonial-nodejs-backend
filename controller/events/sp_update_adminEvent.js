const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const updateAdminEventList = (req, res) => {
  const values = [
    req.body.eventId,
    req.body.eventType,
    req.body.eventTitle,
    req.body.eventReligion,
    req.body.eventOccupation,
    req.body.eventMaritalStatus,
    req.body.eventCaste,
    req.body.eventCountry,
    req.body.eventState,
    req.body.eventCity,
    req.body.eventAmount,
    req.body.eventDatetime,
    req.body.eventStatus,
    req.body.eventVenue,
    req.body.eventOnlineLink,
    req.body.eventMaxGuestsAllowed,
    req.body.eventExtraGuestPrice,
    req.body.eventMaxGuestsPerProfile,
    req.body.eventCancellationAllowedDays,
    req.body.eventCancellationCut,
    req.body.eventDescription
];

  executeStoredProcedure("sp_update_adminEvent", [values]).then((result) => {
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

module.exports = updateAdminEventList;
