const mongoose = require("mongoose");

const tokensSchema = mongoose.Schema({
  cantidad: {
    type: Number,
    required: true,
    default: 200,
  },
  propietario: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Tokens", tokensSchema);
