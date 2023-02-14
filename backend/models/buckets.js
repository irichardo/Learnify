const mongoose = require("mongoose");

const bucketsSchema = mongoose.Schema({
  tokensActuales: {
    type: Number,
    required: true,
  },
  meta: {
    type: Boolean,
    required: true,
    default: false,
  },
  activo: {
    type: Boolean,
    required: true,
    default: true,
  },
  usuarios: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Buckets", bucketsSchema);
