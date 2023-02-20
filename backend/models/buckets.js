const mongoose = require("mongoose");

const bucketSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  "tokens-actuales": {
    type: Number,
    required: true,
  },
  usuarios: {
    type: [
      {
        user: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        "tokens-aportados": {
          type: Number,
          required: true,
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
