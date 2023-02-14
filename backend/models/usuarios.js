const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
