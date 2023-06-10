const getAllMatchMaking = require("../controller/sp_get_allMatchMaking");
const getStrictMatchMaking = require("../controller/sp_get_strictFieldsMatchMaking");
const express = require("express"),
  router = express.Router();

router.post("/getAllMatchMaking", (req, res) => {
  getAllMatchMaking(req, res);
});

router.post("/getStrictMatchMaking", (req, res) => {
  getStrictMatchMaking(req, res);
});

module.exports = router;
