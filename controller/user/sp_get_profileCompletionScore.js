const { db } = require("../../db");

const spFunc = (procedureName, params) => {
  return new Promise((resolve, reject) => {
    db.query(
      `CALL ${procedureName}(${params
        .map(() => "?")
        .join(
          ","
        )}, @v_page1, @v_page2, @v_page3, @v_page4, @v_page5, @v_pagePP, @v_overallScore, @v_out, @v_msg, @v_json);`,
      params,
      (error, result) => {
        if (error) {
          reject(error);
        }
        db.query(
          "SELECT @v_out AS output, @v_msg AS message, @v_json AS jsonResponse, @v_overallScore AS overallScore",
          function (err, rows) {
            if (err) {
              console.error("Error retrieving output parameter: " + err.stack);
              return;
            }
            resolve(rows);
          }
        );
      }
    );
  });
};

const profileCompletionScore = (req, res) => {
  const values = [req.body.userId];
  spFunc("sp_get_profileCompletionScore", [values]).then((result) => {
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
        console.log(error);
        throw error;
      }
    }
  });
};

module.exports = profileCompletionScore;
