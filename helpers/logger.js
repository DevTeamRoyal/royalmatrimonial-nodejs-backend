const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `logs/${new Date()}.log` }),
  ],
});

module.exports = logger;
