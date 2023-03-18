const userSignUpService = require("../controller/sp_create_userLogin");
const {
  userEmailAuth,
  userMobilelAuth,
} = require("../controller/sp_get_loginAuth");
const express = require("express"),
  router = express.Router();

// create new user login
router.post("/signUp", (req, res) => {
  userSignUpService(req, res);
});
router.post("/signInEmail", (req, res) => {
  userEmailAuth(req, res);
});
router.post("/signInMobile", (req, res) => {
  userMobilelAuth(req, res);
});

module.exports = router;
