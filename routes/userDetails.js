const profileCompletionScore = require("../controller/user/sp_get_profileCompletionScore");
const getPartnerDetails = require("../controller/user/sp_get_userPartnerProfile");
const getUserVisitorListAndCard = require("../controller/user/sp_get_userVisitorListAndCard");

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
module.exports = router;
