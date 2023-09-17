const userSignUpService = require("../controller/auth/sp_create_userLogin");
const isUserRegistered = require("../controller/auth/sp_get_isUserRegistered");
const updateUserField = require("../controller/auth/sp_update_userField");
const isMobileRegistered = require("../controller/auth/sp_get_isMobileRegistered");
const {
  userEmailAuth,
  userMobilelAuth,
} = require("../controller/auth/sp_get_loginAuth");
const express = require("express"),
  router = express.Router();

// create new user login
router.post("/isUserRegistered", (req, res) => {
  isUserRegistered(req, res);
});
router.post("/signUp", (req, res) => {
  userSignUpService(req, res);
});
router.post("/signInEmail", (req, res) => {
  userEmailAuth(req, res);
});
router.post("/signInMobile", (req, res) => {
  userMobilelAuth(req, res);
});
router.post("/isMobileRegistered", (req, res) => {
  isMobileRegistered(req, res);
});
router.post("/updateUserField", (req, res) => {
  updateUserField(req, res);
});
module.exports = router;
