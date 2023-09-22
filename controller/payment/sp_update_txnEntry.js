const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const updateTransaction = (req, res) => {
  const values = [
    req.body.userId,
    req.body.txnid,
    req.body.status,
    req.body.txnDetails,
  ];
  executeStoredProcedure("sp_update_txnEntry", [values]).then((result) => {
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
  });
};

module.exports = updateTransaction;
