const userSignUpService = require("../services/sp_create_userLogin");
const express = require("express"),
  router = express.Router();

// create new user login
router.post("/signUp", (req, res) => {
  userSignUpService(req, res);
});

module.exports = router;
