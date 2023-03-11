const createUserStep1 = require("../services/sp_onPage1");
const express = require("express"),
  router = express.Router();

router.post("/step1", (req, res) => {
  createUserStep1(req, res);
});

module.exports = router;
