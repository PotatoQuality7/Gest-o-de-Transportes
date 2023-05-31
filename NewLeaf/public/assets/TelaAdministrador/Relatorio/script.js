let usuario = true;

listarUsuarios();
function listarUsuarios() {
	let lista;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].Estado == 'Fantasma')
                lista += usuarios[i].Codigo+" | "+usuarios[i].NomeUsuario+" | "+usuarios[i].Email+" | "+usuarios[i].Saida" | DELETAR\n";
        }
        alert(lista);	
}

function listarTranportes() {
	let lista;
        for (let i = 0; i < tranportes.length; i++) {
            if (tranportes[i].estado == 'Fantasma')
                lista += tranportes[i].matricula+" | "+tranportes[i].tituloRota+" | "+tranportes[i].codRota+" | "+tranportes[i].lotacao+" | DELETAR\n";
        }
        alert(lista);	
}

const trocar = document.getElementById("trocar");
trocar.addEventListener("click", function() {
	usuario = !usuario;
        if (usuario == false) {
            canvas.style.display = "none";
            listarTransportes();
        }
        else {
          canvas.style.display = "inline-block";
          listarUsuarios();
        }
});
