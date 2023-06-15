const profileCompletionScore = require("../controller/sp_get_profileCompletionScore");
const express = require("express"),
  router = express.Router();

router.post("/profileCompletionScore", (req, res) => {
  profileCompletionScore(req, res);
});

module.exports = router;
