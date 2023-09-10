const profileCompletionScore = require("../controller/user/sp_get_profileCompletionScore");
const getPartnerDetails = require("../controller/user/sp_get_userPartnerProfile");
const getUserVisitorListAndCard = require("../controller/user/sp_get_userVisitorListAndCard");
const getVisitorCount = require("../controller/user/sp_get_userVisitorCount");

const express = require("express"),
router = express.Router();

router.post("/profileCompletionScore", (req, res) => {
  profileCompletionScore(req, res);
});
router.post("/getUserVisitorListAndCard", (req, res) => {
  getUserVisitorListAndCard(req, res);
});
router.post("/getPartnerDetails", (req, res) => {
  getPartnerDetails(req, res);
});
router.post("/getVisitorCount", (req, res) => {
  getVisitorCount(req, res);
});
module.exports = router;
