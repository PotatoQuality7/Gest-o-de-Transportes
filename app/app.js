let porta = 8081;
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.post('/add',function(req,res) {
  res.send("Perchance");
  async function insert() {
      let tabela = "apagar";
      let dados = [req.body.nome, req.body.apelido];
      const db = require("./banco");
      const result = await db.insereDados(tabela,dados);
      console.log(result);
  };
  insert();
});

app.listen(porta, function() {
  console.log("A rodar em "+porta);
});
