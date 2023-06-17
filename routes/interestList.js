const getUserInterestList = require("../controller/interestList/sp_get_userInterestList");
const getUserInterestStatus = require("../controller/interestList/sp_get_userInterestStatus");
const setUserInterest = require("../controller/interestList/sp_set_userInterest");

const express = require("express"),
  router = express.Router();

router.post("/getUserInterestList", (req, res) => {
  getUserInterestList(req, res);
});
router.post("/getUserInterestStatus", (req, res) => {
  getUserInterestStatus(req, res);
});
router.post("/setUserInterest", (req, res) => {
  setUserInterest(req, res);
});

module.exports = router;
