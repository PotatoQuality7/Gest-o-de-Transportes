var map = L.map('map').setView([0,0],1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


navigator.geolocation.watchPosition(success,error);

let marker, usuario, zoomed;

function success(pos) {
	let lat = pos.coords.latitude;
	let lng = pos.coords.longitude;
	let accuracy = pos.coords.accuracy;
	
	if (marker) {
		map.removeLayer(marker);
		map.removeLayer(usuario);
	}
	marker = L.marker([lat,lng]).addTo(map);
	usuario = L.circle([lat,lng], {radius: accuracy}).addTo(map);

	if (!zoomed) {
		zoomed = map.fitBounds(usuario.getBounds());
	}
	map.setView([lat,lng]);

}

function error() {
	if (err.code === 1) {
		alert("Batata");
	}
	else {
		alert("Tá bonito.");
	}
}
/*
const canvas = document.getElementById("papel");
var janelaWidth = canvas.width = window.innerWidth;
var janelaHeight = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let range;
let cubinhos = [];

const width = 30;
const height = width;
var cor;

const desligar = document.getElementById("desligar");
desligar.addEventListener("click", function() {
    canvas.style.display = "inline-block";
    sair();
});


function sair() {
    for (let i = 0; i < janelaWidth/height; i++)
        for (let j = 0; j < janelaWidth/width; j++) {
            cubinhos.push([i,j]);
        }
    const deletar = true;
    range = cubinhos.length;
    if (deletar == false)
	      cor = "rgb(255,255,255)";
     else
       cor = "rgb(0,0,0)";
    ctx.fillStyle = cor;
    intervalo = 100;
    logout();
}


let ciclo;
let intervalo;

function logout() {
  for (let j= 0; j <= 1; j++) {
    let i = Math.trunc(Math.random()*range);
    ctx.fillRect(cubinhos[i][1]*width,cubinhos[i][0]*height,width,height);
    cubinhos[i] = cubinhos[--range];
    anterior = cubinhos.toString();
    if (range != 0)
        setTimeout(logout,intervalo);
    else {
      clearInterval(logout);
      window.location = '../Login/index.php';
    }
    intervalo *= 0.95;
  }
};
*/
