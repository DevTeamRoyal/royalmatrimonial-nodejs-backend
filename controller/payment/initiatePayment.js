const payuClient = require("../../helpers/payuConfig");
const { createId } = require("@paralleldrive/cuid2");
const crypto = require('crypto');

const initiatePayment = (req, res) => {
  const paymentPayload = {
    key: process.env.PAYU_KEY,
    txnid: createId(),
    amount: req.body.amount,
    productinfo: req.body.productinfo,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    lastname: req.body.lastname,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    surl: "http://dev.royalmatrimonial.com/PaymentSuccess",
    furl: "http://dev.royalmatrimonial.com/PaymentFailure",
    hash: crypto.createHash('sha512').update(`${process.env.PAYU_KEY}|${this.txnid}`).digest('hex'),
  };
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
