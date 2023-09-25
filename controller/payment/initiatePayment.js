// const createTransaction = require("./sp_create_txnEntry");
// const updateTransaction = require("./sp_update_txnEntry");
const initRazorPay = require("../../helpers/razorpay"); 
const initiatePayment = async (req, res) => {
  try {
    const result = await initRazorPay(req);
    res.json({
      message: "ok",
      jsonResponse: result,
      status: 200,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = initiatePayment;
