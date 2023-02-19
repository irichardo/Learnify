const mongoose = require("mongoose");

const specialtySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Specialtys", specialtySchema);
