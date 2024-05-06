const mongoose = require("mongoose");

const connectMongodb = async (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log(`mongodb connected`);
    })
    .catch((err) => {
      console.log(`MongoDB error- > ${err}`);
    });
};

module.exports = { connectMongodb };
