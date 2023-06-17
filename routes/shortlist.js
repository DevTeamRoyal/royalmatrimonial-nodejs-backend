const getUserShortlist = require("../controller/shortlist/sp_get_userShortlist");
const userShortlistStatus = require("../controller/shortlist/sp_get_userShortlistStatus");
const setUserShortlist = require("../controller/shortlist/sp_set_userShortlist");

const express = require("express"),
  router = express.Router();

router.post("/getUserShortlist", (req, res) => {
  getUserShortlist(req, res);
});
router.post("/userShortlistStatus", (req, res) => {
  userShortlistStatus(req, res);
});
router.post("/setUserShortlist", (req, res) => {
  setUserShortlist(req, res);
});

module.exports = router;
