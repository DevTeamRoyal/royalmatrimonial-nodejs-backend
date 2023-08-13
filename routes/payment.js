const initiatePayment = require("../controller/payment/initiatePayment");
const updateTransaction = require("../controller/payment/sp_update_txnEntry");
const express = require("express"),
  router = express.Router();

router.post("/initiatePayment", (req, res) => {
    initiatePayment(req, res);
});

router.post("/updateTransaction", (req, res) => {
  updateTransaction(req, res);
});

module.exports = router;
