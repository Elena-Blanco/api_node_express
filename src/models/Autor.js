const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      required: [true, "O nome do autor(a) é obrigatório"]
    },
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
)

const autores = mongoose.model("autores", autorSchema)

module.exports = {
  autores
}