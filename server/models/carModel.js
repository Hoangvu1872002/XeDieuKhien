const mongoose = require("mongoose");

var carSchema = new mongoose.Schema({
    active: {
        type: String,
        require: true,
        unique: true,
    }
    , account: {
        type: mongoose.Schema.Types.String,
        require: true,
        ref: "Account"
    }
});
module.exports = mongoose.model("Car", carSchema);
