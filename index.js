const express = require ('express')
const connectDatabase = require ('./dataBase')
const rotas = require ('./rotas')
const app = express ()
const port = 3008
app.use (express.json())
connectDatabase ()
app.use(rotas)




app.listen(port,'0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
  });