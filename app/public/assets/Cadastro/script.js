var conta;

const passageiro = document.getElementById("passageiro");
passageiro.addEventListener("click", function() {
  conta = 1;
});

const administrador = document.getElementById("administrador");
administrador.addEventListener("click", function() {
  conta = 0;
});

const gerente = document.getElementById("gerente");
gerente.addEventListener("click", function() {
  conta = 2;
});
