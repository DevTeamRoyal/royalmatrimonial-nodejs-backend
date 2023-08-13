const payuClient = require("../../helpers/payuConfig");
const { createId } = require("@paralleldrive/cuid2");
const crypto = require('crypto');
const getCurrentDateTimeFormatted = require('../../helpers/getDate');
const createTransaction = require('./sp_create_txnEntry')

const initiatePayment = (req, res) => {
  const preTransactionData = {
    userId: req.body.userId,
    txnid: createId(),
    status: 'INIT',
    productinfo: req.body.productinfo,
    mihpayid: null,
    mode: null,
    unmappedstatus: null,
    key: null,
    amount: req.body.amount,
    discount: null,
    netAmountDebit: null,
    addedon: getCurrentDateTimeFormatted(),
    field9: null,
    paymentSource: null,
    meCode: null,
    PGTYPE: null,
    bankRefNum: null,
    bankcode: null,
    error: null,
    errorMessage: null
  }
  createTransaction(preTransactionData, res);
  const paymentPayload = {
    key: process.env.PAYU_KEY,
    txnid: createId(),
    amount: req.body.amount,
    productinfo: req.body.productinfo,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    lastname: req.body.lastname,
    surl: process.env.ENV === "STAGE" ? "http://localhost:3000/PaymentSuccess" : "http://dev.royalmatrimonial.com/PaymentSuccess",
    furl: process.env.ENV === "STAGE" ? "http://localhost:3000/PaymentFailure" : "http://dev.royalmatrimonial.com/PaymentFailure",
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
