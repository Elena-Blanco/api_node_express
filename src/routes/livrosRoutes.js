const express = require('express');
const {LivroController} = require('../controllers/livrosController.js');
const {paginar} = require('../middlewares/paginar.js');

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, paginar)
  .get("/livros/busca", LivroController.listarLivroPorFiltro, paginar)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)

module.exports = router;