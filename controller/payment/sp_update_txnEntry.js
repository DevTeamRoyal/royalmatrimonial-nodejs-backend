const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const updateTransaction = (req, res) => {
  const values = [
    req.body.userId,
    req.body.txnid,
    req.body.status,
    req.body.productinfo,
    req.body.mihpayid,
    req.body.mode,
    req.body.unmappedstatus,
    req.body.key,
    req.body.amount,
    req.body.discount,
    req.body.netAmountDebit,
    req.body.addedon,
    req.body.field9,
    req.body.paymentSource,
    req.body.meCode,
    req.body.PGTYPE,
    req.body.bankRefNum,
    req.body.bankcode,
    req.body.error,
    req.body.errorMessage,
  ];
  executeStoredProcedure("sp_update_txnEntry", [values]).then(
    (result) => {
      if (result["0"]["output"] < 0) {
        res.json(result);
      } else {
        try {
          res.json({
            ...result["0"],
            jsonResponse: JSON.parse(result["0"].jsonResponse),
            status: 200,
          });
        } catch (error) {
          throw error;
        }
      }
    }
  );
};

module.exports = updateTransaction;
