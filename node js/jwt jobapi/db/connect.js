const mongoose = require("mongoose");

const connectdb = (url) => {
  return mongoose.connect(url)
  // .then((response) => console.log(response.mongoose))
  // .catch((e) => console.log(e));;
};

module.exports = connectdb;
