const mongoose = require('mongoose');
const {ErroBase} = require('../erros/ErroBase.js');
const { RequisicaoIncorreta } = require('../erros/RequisicaoIncorreta.js');
const { ErroValidacao } = require('../erros/ErroValidacao.js');
const { NaoEncontrado } = require('../erros/NaoEncontrado.js');


function manipuladorDeErros (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}
  

module.exports = {
    manipuladorDeErros
  }