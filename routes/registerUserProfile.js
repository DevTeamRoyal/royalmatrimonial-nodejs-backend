const upload = require("../helpers/multer");
const createUserStep1 = require("../controller/sp_onPage1");
const createUserStep2 = require("../controller/sp_onPage2");
const createUserStep3 = require("../controller/sp_onPage3");
const createUserStep4 = require("../controller/sp_onPage4");
const createUserStep5 = require("../controller/sp_onPage5");
const express = require("express"),
  router = express.Router();

router.post("/step1", upload.single("image"), (req, res) => {
  try {
    createUserStep1(req, res);
  } catch (err) {
    res.json({ error: err });
  }
});
router.post("/step2", (req, res) => {
  createUserStep2(req, res);
});
router.post("/step3", (req, res) => {
  createUserStep3(req, res);
});
router.post("/step4", (req, res) => {
  createUserStep4(req, res);
});
router.post("/step5", (req, res) => {
  createUserStep5(req, res);
});

//update
module.exports = router;
