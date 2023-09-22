const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createTransaction = (data, res) => {
  const values = [
    data.userId,
    data.txnid,
    data.status,
    data.amount,
    data.prodType,
    data.prodId,
    data.prodIDdays,
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
