const fs = require("fs");

const logReqRes = (fileName) => {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n ${Date.now()} - ${req.method} - ${req.path} -${req.method}`,
      (err, data) => {
        next();
      }
    );
  };
};

module.exports = {
  logReqRes,
};
