const { executeStoredProcedure } = require("../../helpers/storedProcedure");
const generateOTP = require("../../helpers/generateOtp");
const { sendOtpApi, sendForgotPwdOtpApi } = require("../../helpers/sendOtpApi");
const { createTokenForgetPwd } = require("../../helpers/jwt");

const createOtp = async (req, res) => {
  const OTP = generateOTP();
  const otpStatus = "A";
  const values = [req.body.isdMobile, OTP, req.body.otpScope, otpStatus];
  const smsOtpResponse = await sendOtpApi(req.body.isdMobile, OTP);
  if (smsOtpResponse.Status === "OK") {
    executeStoredProcedure("sp_create_otp", [values]).then((result) => {
      if (result["0"]["output"] < 0) {
        res.json(result);
      } else {
        try {
          res.json({
            ...result["0"],
            jsonResponse: JSON.parse(result["0"].jsonResponse),
            status: 200,
          });
        } catch (error) {
          throw error;
        }
      }
    });
  } else {
    res.send(smsOtpResponse);
  }
};

const createOtpForgetPassword = async (req, res) => {
  const OTP = generateOTP();
  const otpStatus = "A";
  const values = [req.body.isdMobile, OTP, req.body.otpScope, otpStatus];
  const smsOtpResponse = await sendForgotPwdOtpApi(req.body.isdMobile, OTP);
  if (smsOtpResponse.Status === "OK") {
    executeStoredProcedure("sp_create_otp", [values]).then((result) => {
      if (result["0"]["output"] < 0) {
        res.json(result);
      } else {
        try {
          res.json({
            ...result["0"],
            jsonResponse: JSON.parse(result["0"].jsonResponse),
            status: 200,
          });
        } catch (error) {
          throw error;
        }
      }
    });
  } else {
    res.send(smsOtpResponse);
  }
};
const compareOtp = (req, res) => {
  const values = [req.body.isdMobile, req.body.otp, req.body.otpScope];
  executeStoredProcedure("sp_compare_otp", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.send(result[0]);
    } else {
      try {
        res.json({
          ...result["0"],
          jsonResponse: JSON.parse(result["0"].jsonResponse),
          status: 200,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

const compareOtpForgetPassword = (req, res) => {
  const values = [req.body.isdMobile, req.body.otp, req.body.otpScope];
  executeStoredProcedure("sp_compare_otp", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.send(result[0]);
    } else {
      try {
        res.json({
          ...result["0"],
          jsonResponse: JSON.parse(result["0"].jsonResponse),
          status: 200,
          token: createTokenForgetPwd({ userId: req.body.userId }),
        });
      } catch (error) {
        throw error;
      }
    }
  });
};
module.exports = { createOtp, compareOtp, compareOtpForgetPassword, createOtpForgetPassword };
