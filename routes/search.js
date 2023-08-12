const getSearchPPByRMID = require("../controller/search/sp_get_searchPartnerProfileByRMID");
const express = require("express"),
  router = express.Router();

router.post("/getSearchPPByRMID", (req, res) => {
  getSearchPPByRMID(req, res);
});

module.exports = router;
