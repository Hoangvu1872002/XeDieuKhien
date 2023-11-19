const mongoose = require("mongoose");

var parameterSchema = new mongoose.Schema({
  carName: {
    type: String,
    default: "bugnef",
  },
  Parameter: [
    {
      Dleft_sensor: {
        type: String,
      },
      Dright_sensor: {
        type: String,
      },
      distance: {
        type: String,
      },
      distanceL: {
        type: String,
      },
      distanceR: {
        type: String,
      },
      Uleft_sensor: {
        type: String,
      },
      Uright_sensor: {
        type: String,
      },
    },
  ],
});
module.exports = mongoose.model("Parameter", parameterSchema);
