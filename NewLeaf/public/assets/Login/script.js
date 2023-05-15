const usuario = {
  codigo: 0,
  nome: "",
  email: "",
  estatuto: "",
  posicao: 0,
  senha: "",
}

const transportes = [{
  codGerente: 0,
  matricula: "",
  tipo: "",
  codRota: 0,
  lotacao: 0,
  posicao: 0,
  velocidade: 0,
  cor: "",
  pontos: [],
  atual: 0,
  destino: "",
}];

const admin = {
  transportes: 0,
}

const preferencias = {

};

async function iniciarUsuario(results,metodo) {
    console.log("billy guede");
    usuario.codigo = results[0].CodUsuario;
    usuario.estatuto = results[0].Estatuto;
    //console.log(results[0].CodUsuario);
    let n = 0;
    var query;
    let tabela = "Login(CodUsuario)";
    let dados = [usuario.codigo];
    insert(tabela,dados);
    if (metodo == 0) {//acesso completo
        usuario.nome = results[0].NomeUsuario;
        usuario.posicao = results[0].Posicao;
        usuario.senha = results[0].Senha;
        query = "select Email from Email where CodUsuario="+usuario.codigo+" AND Fim is null";
        results = await db.pegaDados(query);
        usuario.email = results[0].Email;
        query = "select * from Transportes";
    }
    else //acesso somente a viatura
      query = "select * from Transportes where CodGerente="+usuario.codigo+" AND Matricula='"+token+"'";
    var cor = "";
    transportes.pop();
    results = await db.pegaDados(query);
    results.forEach(function(linhas) {
        transportes.push({
          codGerente: linhas.CodGerente,
          matricula: linhas.Matricula,
          tipo: linhas.Tipo,
          codRota: linhas.CodRota,
          lotacao: linhas.Lotacao,
          posicao: linhas.Posicao,
          velocidade: linhas.Velocidade,
          cor: cor,
          pontos: [],
          atual: 0,
          destino: "",
        });
    });
    n = transportes.length;
    async function hajime(i) {
      query = "select Cor from Cores where CodUsuario="+usuario.codigo+" AND CodRota="+transportes[i].codRota;
      results = await db.pegaDados(query);
      transportes[i].cor = results[0].Cor;
      if (i != n-1)
         hajime(i+1);
       else {
         proceder = true;
         console.log("Prossiga");
       }
    }
    let proceder = false;
    hajime(0);

    function porta() {
      console.log("Wait for it...");
      if (proceder) {
          clearInterval(prompt);
          console.log(transportes);
          reencaminharUsuario(metodo);
      }
    }
    prompt = setInterval(porta,50);
}

function reencaminharUsuario(metodo) {

  /*var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
*/
  console.log("Reencaminhar");
  switch (usuario.estatuto) {
    case "Passageiro":
          console.log("Login com socesso");
          conta = "Passageiro";
          link = '../TelaPassageiro/index.html';
          break;
    case "Gerente": console.log("Login com socesso");
          if (metodo == 0) {
              conta = "Gerente";
      	  link = '../TelaGerente/index.html';
          }
          else {
            conta = "Controlador";
            link = '../TelaGerente/Estatisticas/index.html';
          }
          break;
  }
  console.log("Lonk: "+link);
}

module.exports = {ini};
