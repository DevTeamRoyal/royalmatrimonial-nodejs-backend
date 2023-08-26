const getGetPackageList = require("../controller/packages/sp_get_userPackagePrivacy");
const express = require("express"),
  router = express.Router();

router.get("/getGetPackageList", (req, res) => {
    getGetPackageList(req, res);
});


module.exports = router;
