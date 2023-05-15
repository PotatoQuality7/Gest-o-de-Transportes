let usuario = JSON.parse(sessionStorage.getItem("usuario"));

let nome = document.getElementById("nome");
let apelido = document.getElementById("apelido");
let email= document.getElementById("email");
let naturalidade = document.getElementById("naturalidade");
let cidade = document.getElementById("cidade");
let atual = document.getElementById("atual");
let latual = document.getElementById("latual");
let deletar = document.getElementById("deletar");
let dsenha = document.getElementById("dsenha");
let enter = document.getElementById("enter");
let certeza = document.getElementById("certeza");
let cancelar = document.getElementById("cancelar");

nome.value = usuario.nome;
apelido.value = usuario.nome;
email.value = usuario.email;
naturalidade.value = "No te hablas";
cidade.value = "No te hablas";

editarInformacoes(false);
function editarInformacoes(estado) {
  nome.readOnly = estado;
  apelido.readOnly = estado;
  email.readOnly = estado;
  naturalidade.readOnly = estado;
  cidade.readOnly = estado;
  atual.readOnly = estado;
  atual.placeholder = "";
  latual.innerHTML = "Senha Atual:";
  nova.style.display = "inline-block";
}

function alterarSenha() {  
  // logica para alteracao da senha do gerente
}

const confirmar = document.getElementById("confirmar");
confirmar.addEventListener("click", function() {
	switch (msg) {
	  case 0: alert("Error: Senha inserida =/= Senha atual\nNenhum dado alterado."); break;
	  case 1: alert("Dados alterados com sucesso. Senha mantida."); break;
	  case 2: alert("Dados alterados com sucesso."); break;
        }
	if (msg != 0) {
		editarInformacoes(false);
		atual.innerHTML = "";
		atual.placeholder = '········';
	  	latual.innerHTML = "Senha:"
		nova.style.display = "none";
	}

});

const revelar = document.getElementById("revelar");
revelar.addEventListener("press", function() {
	nova.type = "text";
});

revelear.addEventListener("released", function() {
	nova.type = "password";
});

const h1 = document.getElementById("h1");
switch (usuario.estatuto) {
  case "Passageiro": h1.innerHTML = "Perfil do Passageiro"; break;
  case "Gerente": h1.innerHTML = "Perfil do Gerente"; break;
  case "Administrador": h1.innerHTML = "Perfil do Administrador"; break;
}

deletar.addEventListener("click", function() {
	deletar.display = "none";
	dsenha.style.display = "inline-block";
	enter.style.display = "inline-block";
})

enter.addEventListener("click", function() {
	dsenha.style.display = "none";
	enter.style.display = "none";
	if (dsenha.value != usuario.senha) {
	    alert("Error: Senha inserida =/= Senha atual.");
	    deletar.style.display = "inline-block";
	}
	else {
		certeza.style.display = "inline-block";
		cancelar.style.display = "inline-block";
	}
})

cancelar.addEventListener("click", function() {
	certeza.style.display = "none";
	cancelar.style.display = "none";
})

