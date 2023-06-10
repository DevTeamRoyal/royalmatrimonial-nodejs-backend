const updateUserPrivacy = require("../controller/sp_update_userPrivacy");
const express = require("express"),
  router = express.Router();

router.post("/updatePrivacy", (req, res) => {
  updateUserPrivacy(req, res);
});

module.exports = router;
