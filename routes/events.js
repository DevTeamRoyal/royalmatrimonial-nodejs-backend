const getAdminEventList = require("../controller/events/sp_get_adminEventList");
const express = require("express"),
  router = express.Router();

router.get("/getAdminEventList", (req, res) => {
  getAdminEventList(req, res);
});


module.exports = router;
