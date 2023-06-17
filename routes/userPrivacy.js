const updateUserPrivacy = require("../controller/privacy/sp_update_userPrivacy");
const getUserPrivacy = require("../controller/privacy/sp_get_userPackagePrivacy");
const express = require("express"),
  router = express.Router();

router.post("/updatePrivacy", (req, res) => {
  updateUserPrivacy(req, res);
});
router.post("/getUserPrivacy", (req, res) => {
  getUserPrivacy(req, res);
});

module.exports = router;
