const Razorpay = require("razorpay");
const { createId } = require("@paralleldrive/cuid2");

// Initialize Razorpay with your API keys
const razorpay = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEYID,
  key_secret: process.env.RAZOR_PAY_KEYID_SECRET,
});

class paymentParamsModel {
  constructor(amount, currency, notes) {
    this.amount = amount;
    this.currency = currency;
    this.notes = {
      notes: this.notes,
    };
  }
}

const CURRENCY = "INR";
const initRazorPay = async (req) => {
  const testData = new paymentParamsModel(
    req.body.amount,
    CURRENCY,
    req.body.notes
  );
  const options = {
    ...testData,
    receipt: createId(),
  };
  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    return error;
  }
};

module.exports = initRazorPay;
