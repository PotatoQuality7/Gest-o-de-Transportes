const canvas = document.getElementById("papel");
var janelaWidth = canvas.width = window.innerWidth;
var janelaHeight = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let range;
let cubinhos = [];

const width = 30;
const height = width;
var cor;

const sair = document.getElementById("sair");
sair.addEventListener("click", function() {
    sair();
});

function sair() {
    for (let i = 0; i < janelaWidth/height; i++)
        for (let j = 0; j < janelaWidth/width; j++) {
            cubinhos.push([i,j]);
        }
    range = cubinhos.length;
    if (deletar == false)
	cor = "rgb(255,255,255)";
     else
       cor = "rgb(0,0,0)";
    ctx.fillStyle = cor;
    intervalo = 1500;
    logout();

}

let ciclo;
let intervalo;

function logout() {
    let i = Math.trunc(Math.random()*range);
    ctx.fillRect(cubinhos[i][1]*width,cubinhos[i][0]*height,width,height);
    cubinhos[i] = cubinhos[--range];
    anterior = cubinhos.toString();
    if (range != 0) {
        setTimeout(logout,intervalo);
    }
    intervalo *= 0.4;
};
