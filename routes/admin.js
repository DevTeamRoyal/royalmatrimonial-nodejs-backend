const getClientList = require("../controller/sp_get_clientList_admin");
const createEmployee = require("../controller/sp_create_empLogin");
const express = require("express"),
  router = express.Router();

router.post("/getAllCustomers", (req, res) => {
  getClientList(req, res);
});

router.post("/createEmployee", (req, res) => {
  createEmployee(req, res);
});

module.exports = router;
