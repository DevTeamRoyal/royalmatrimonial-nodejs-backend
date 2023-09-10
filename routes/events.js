const getAdminEventList = require("../controller/events/sp_get_adminEventList");
const getAdminEventDetails = require("../controller/events/sp_get_adminEventDetails");
const express = require("express"),
  router = express.Router();

router.post("/getAdminEventList", (req, res) => {
  getAdminEventList(req, res);
});
router.post("/getAdminEventDetails", (req, res) => {
  getAdminEventDetails(req, res);
});

module.exports = router;
