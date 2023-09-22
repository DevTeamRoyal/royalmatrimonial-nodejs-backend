const payuClient = require("../../helpers/payuConfig");
const { createId } = require("@paralleldrive/cuid2");
const crypto = require("crypto");
const createTransaction = require("./sp_create_txnEntry");
const updateTransaction = require("./sp_update_txnEntry");
const { default: axios } = require("axios");

const initiatePayment = async (req, res) => {
  const txnId = createId();
  const hashSalt = crypto
    .createHash("sha512")
    .update(`${process.env.PAYU_KEY}|${txnId}`)
    .digest("hex");
  let preTransactionData = {
    userId: req.body.userId,
    txnid: txnId,
    status: "INIT",
    amount: req.body.amount,
    prodType: req.body.prodType, // p or E
    prodId: req.body.prodId, // packageID, eventID
    prodIDdays: req.body.prodIDdays, // package days; send -1 incase of event
  };
  createTransaction(preTransactionData, res);
  const paymentPayload = {
    key: process.env.PAYU_KEY,
    txnid: txnId,
    amount: req.body.amount,
    productinfo: req.body.productinfo,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    lastname: req.body.lastname,
    surl: "http://dev.royalmatrimonial.com/Checkout#PaymentSuccess", // success payment
    furl: "http://dev.royalmatrimonial.com/Checkout#PaymentFailure", // failure payment
    hash: hashSalt,
  };
  try {
    const result = payuClient.paymentInitiate(paymentPayload);
    res.json({
      message: "ok",
      jsonResponse: result,
      status: 200,
    });
    //VERIFY PAYMENT FUNCTION
    const verificationRequestParams = {
      key: process.env.PAYU_KEY,
      command: "verify_payment",
      var1: createId(),
      hash: hashSalt,
    };
    const verifyResponse = await axios.post(process.env.VERIFY_PAYMENT_TEST, {
      "Content-Type": "application/x-www-form-urlencoded",
      verificationRequestParams,
    });
    // updateTransaction();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = initiatePayment;
