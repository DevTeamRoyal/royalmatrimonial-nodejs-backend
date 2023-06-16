const getAllMatchMaking = require("../controller/sp_get_allMatchMaking");
const getStrictMatchMaking = require("../controller/sp_get_strictFieldsMatchMaking");
const getSearchMatchMaking = require("../controller/sp_get_searchMatchMaking");
const express = require("express"),
  router = express.Router();

router.post("/getAllMatchMaking", (req, res) => {
  getAllMatchMaking(req, res);
});

router.post("/getStrictMatchMaking", (req, res) => {
  getStrictMatchMaking(req, res);
});

router.post("/getSearchMatchMaking", (req, res) => {
  getSearchMatchMaking(req, res);
});

module.exports = router;
