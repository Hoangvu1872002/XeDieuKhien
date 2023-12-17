const mongoose = require("mongoose");

var parameterSchema = new mongoose.Schema({
  carName: {
    type: String,
    default: "bugnef",
  },
  Parameter: [
    {
      Dl: {
        type: String,
      },
      Dr: {
        type: String,
      },
      d: {
        type: String,
      },
      dL: {
        type: String,
      },
      dR: {
        type: String,
      },
      Ul: {
        type: String,
      },
      Ur: {
        type: String,
      },
    },
  ],
});
module.exports = mongoose.model("Parameter", parameterSchema);
