const getClientList = require("../controller/admin/sp_get_clientList_admin");
const createEmployee = require("../controller/admin/sp_create_empLogin");
const createAdminEvent = require("../controller/events/sp_create_adminEvent");
const updateAdminEventList = require("../controller/events/sp_update_adminEvent");
const getAdminEventList = require("../controller/events/sp_get_adminEventList");
const getAdminEventDetails = require("../controller/events/sp_get_adminEventDetails");

const express = require("express"),
  router = express.Router();

router.post("/getAllCustomers", (req, res) => {
  getClientList(req, res);
});

router.post("/createEmployee", (req, res) => {
  createEmployee(req, res);
});

router.get("/createAdminEvent", (req, res) => {
  createAdminEvent(req, res);
});

router.get("/updateAdminEventList", (req, res) => {
  updateAdminEventList(req, res);
});

router.get("/getAdminEventList", (req, res) => {
  getAdminEventList(req, res);
});

router.get("/getAdminEventDetails", (req, res) => {
  getAdminEventDetails(req, res);
});


module.exports = router;
