const createUserPartnerProfile = require("../services/sp_create_userPartnerPref");
const express = require("express"),
  router = express.Router();

router.post("/postPartnerPref", (req, res) => {
  createUserPartnerProfile(req, res);
});

module.exports = router;
