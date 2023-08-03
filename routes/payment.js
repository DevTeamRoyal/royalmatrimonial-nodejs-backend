const initiatePayment = require("../controller/payment/initiatePayment");
const express = require("express"),
  router = express.Router();

router.post("/initiatePayment", (req, res) => {
    initiatePayment(req, res);
});


module.exports = router;
