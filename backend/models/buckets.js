const mongoose = require("mongoose");

const bucketSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  tokensActuales: {
    type: Number,
    required: true,
  },
  usuarios: {
    type: [
      {
        _id: {
          type: String,
          required: true,
        },
        aportes: {
          type: Number,
          required: true,
          min: 10,
        },
      },
    ],
    required: true,
  },
  activo: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Bucket", bucketSchema);
