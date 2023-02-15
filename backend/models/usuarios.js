const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
  contraseña: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    enum: ["super admin", "admin", "teacher", "student"],
    default: "student",
  },
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
