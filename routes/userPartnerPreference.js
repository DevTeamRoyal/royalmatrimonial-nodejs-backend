const createPartnerPref = require("../controller/user/sp_onPagePartnerPref");
const express = require("express"),
  router = express.Router();

router.post("/postPartnerPref", (req, res) => {
  createPartnerPref(req, res);
});

module.exports = router;
