const mongoose = require("mongoose");

const tiposDeCuentasSchema = mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TiposDeCuenta", tiposDeCuentasSchema);
