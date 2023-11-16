const mongoose = require("mongoose");

var accountSchema = new mongoose.Schema({
  nameAccount: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Account", accountSchema);
