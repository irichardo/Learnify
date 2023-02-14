const mongoose = require("mongoose");

const cursosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  tema: {
    type: String,
    required: true,
  },
  links: {
    type: String,
  },
});
