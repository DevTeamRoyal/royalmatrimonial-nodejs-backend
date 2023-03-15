const createUserFamilyAbout = require("../controller/sp_create_familyAbout");
const express = require("express"),
  router = express.Router();

// create new user login
router.post("/postUserFamilyAbout", (req, res) => {
  createUserFamilyAbout(req, res);
});

module.exports = router;
