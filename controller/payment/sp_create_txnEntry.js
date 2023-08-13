const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createTransaction = (data, res) => {
  const values = [
    data.userId,
    data.txnid,
    data.status,
    data.productinfo,
    data.mihpayid,
    data.mode,
    data.unmappedstatus,
    data.key,
    data.amount,
    data.discount,
    data.netAmountDebit,
    data.addedon,
    data.field9,
    data.paymentSource,
    data.meCode,
    data.PGTYPE,
    data.bankRefNum,
    data.bankcode,
    data.error,
    data.errorMessage,
  ];
  executeStoredProcedure("sp_create_txnEntry", [values]).then(
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

module.exports = createTransaction;
