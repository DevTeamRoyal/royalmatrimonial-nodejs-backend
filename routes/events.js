const getAdminEventList = require("../controller/events/sp_get_adminEventList");
const getAdminEventDetails = require("../controller/events/sp_get_adminEventDetails");
const createAdminEvent = require("../controller/events/sp_create_adminEvent");
const createUserEvent = require("../controller/events/sp_create_userEvent")
const getUserEvent = require("../controller/events/sp_get_userEvent");
const getUserEventList = require("../controller/events/sp_get_userEventList");

const express = require("express"),
  router = express.Router();

router.post("/getAdminEventList", (req, res) => {
  getAdminEventList(req, res);
});
router.post("/getAdminEventDetails", (req, res) => {
  getAdminEventDetails(req, res);
});
router.post("/createAdminEvent", (req, res) => {
  createAdminEvent(req, res);
});
router.post("/createUserEvent", (req, res) => {
  createUserEvent(req, res);
});
router.post("/getUserEvent", (req, res) => {
  getUserEvent(req, res);
});
router.post("/getUserEventList", (req, res) => {
  getUserEventList(req, res);
});
module.exports = router;
