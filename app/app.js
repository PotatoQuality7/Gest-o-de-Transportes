let porta = 8081;
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post('/login',function(req,res) {
 // res.send("Perchance");
  async function select() {
      console.log("Trigged");
      const dados = require("./public/assets/Login/dados");
      const db = require("./banco");
      await dados.algo(req.body.email,req.body.token,req.body.metodo);
      dados.done = true;
      console.log(dados.done);
      //const result = await db.pegaDados(query,dados);
      //console.log(result);
      //res.send(result);
  };
  select();
});

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
