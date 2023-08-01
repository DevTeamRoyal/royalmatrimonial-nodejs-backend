const payuClient = require("../../helpers/payuConfig");

const initiatePayment = (req, res) => {
  const paymentPayload = {
    key: req.body.key,
    api_version: req.body.api_version,
    txnid: req.body.txnid,
    amount: req.body.amount,
    productinfo: req.body.productinfo,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    lastname: req.body.lastname,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    surl: req.body.surl,
    furl: req.body.furl,
    hash: req.body.hash
  }
  try {
    const result = payuClient.paymentInitiate(paymentPayload);
    res.json({
      message: "ok",
      jsonResponse: result,
      status: 200,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = initiatePayment;
