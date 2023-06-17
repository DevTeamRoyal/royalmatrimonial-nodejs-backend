const { createOtp, compareOtp } = require("../controller/smsEmail/sms");
const express = require("express"),
  router = express.Router();

router.post("/send-otp", (req, res) => {
  createOtp(req, res);
});
router.post("/verify-otp", (req, res) => {
  compareOtp(req, res);
});

module.exports = router;
