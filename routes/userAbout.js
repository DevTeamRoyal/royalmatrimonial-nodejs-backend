const createUserAbout = require("../controller/sp_create_userAbout");
const express = require("express"),
  router = express.Router();

// create new user login
router.post("/postUserAbout", (req, res) => {
  createUserAbout(req, res);
});

module.exports = router;
