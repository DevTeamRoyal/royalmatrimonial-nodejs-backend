const createUserStep1 = require("../controller/sp_onPage1");
const createUserStep4 = require("../controller/sp_onPage4");
const createUserStep5 = require("../controller/sp_onPage5");
const express = require("express"),
  router = express.Router();

router.post("/step1", (req, res) => {
  createUserStep1(req, res);
});
router.post("/step4", (req, res) => {
  createUserStep4(req, res);
});
router.post("/step5", (req, res) => {
  createUserStep5(req, res);
});

module.exports = router;
