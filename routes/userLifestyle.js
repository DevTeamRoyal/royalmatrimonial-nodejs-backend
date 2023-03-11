const createUserLifestyle = require("../services/sp_create_userLifestyle");
const express = require("express"),
  router = express.Router();

router.post("/postUserLifestyle", (req, res) => {
  createUserLifestyle(req, res);
});

module.exports = router;
