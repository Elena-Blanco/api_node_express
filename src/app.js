const express = require('express');
const {db} = require('./config/dbConnect.js');
const {routes} = require('./routes/index.js');
const {manipuladorDeErros} = require('./middlewares/manipuladorDeErros.js');
const {manipulador404} = require('./middlewares/manipulador404.js')

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

module.exports = {
  app
}