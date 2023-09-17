const { createOtp, compareOtp, compareOtpForgetPassword, createOtpForgetPassword } = require("../controller/smsEmail/sms");
const express = require("express"),
  router = express.Router();

router.post("/send-otp", (req, res) => {
  createOtp(req, res);
});
router.post("/verify-otp", (req, res) => {
  compareOtp(req, res);
});
router.post("/forgetPwd-verify-otp", (req, res) => {
  compareOtpForgetPassword(req, res);
});
router.post("/send-otp-forgetPwd", (req, res) => {
  createOtpForgetPassword(req, res);
});
module.exports = router;
