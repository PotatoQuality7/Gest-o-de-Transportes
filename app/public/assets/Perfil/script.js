function editarInformacoes() {
  document.getElementById("nome").readOnly = false;
  document.getElementById("Apelido").readOnly = false;
  document.getElementById("email").readOnly = false;
  document.getElementById("Naturalidade").readOnly = false;
  document.getElementById("Cidade").readOnly = false;
}

function alterarSenha() {
  // logica para alteracao da senha do gerente
}
const h1 = document.getElementById("h1");
switch (conta) {
  case 0: h1.innerHTML = "Perfil do Administrador"; break;
  case 1: h1.innerHTML = "Perfil do Passageiro"; break;
  case 2: h1.innerHTML = "Perfil do Gerente"; break;
}
