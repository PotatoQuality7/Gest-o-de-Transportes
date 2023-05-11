let prompt;

function activate() {
	alert("ativou");
	const dados = require("./dados");
	dados.done = false;
	prompt = setInterval(reencaminharUsuario,500);
	alert("ativou");
}

function reencaminharUsuario() {
	const dados = require("./dados");
        alert("Testing");
	if (dados.done == true) {
			alert(dados.usuario[0]);
			clearInterval(prompt);
			window.location = dados.link;
	}

}
