if (conta == null) {
    var conta;
    conta = 1;

    const login = document.getElementById("login");
    login.addEventListener("click", function() {
      switch (conta) {
        case 0: window.location = '../TelaAdministrador/index.html'; break;
        case 1: window.location = '../TelaPassageiro/index.html'; break;
        case 2: window.location = '../TelaGerente/index.html'; break;
      }
    });
}
