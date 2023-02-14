const mongoose = require("mongoose");

const estatusDeCursoSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EstatusDeCurso", estatusDeCursoSchema);
