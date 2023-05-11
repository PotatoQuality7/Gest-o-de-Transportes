let bolinha = [];
let n = 0;
const cliente = {

};
const canvas = document.getElementById("papel");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,80,80)";
ctx.fillRect(0,0,width,height);

const tela = {
  zoom: 1,
  interseccoes: [],
};
const preferencias = {
  tick: 1
};
const transporte = {
  tipo: "Chapa",
  rota: ["Museu","Laulane"],
  direcao : 0,
  //destinos: dGrande,
  posicao: [510,0],
  fator: [0,0],
  velocidade: 0,
  estado: "Em circulação",
  preco: 15,
};

function mousePosition(event) {
  if (permissao) {
      let c = 15;
      bolinha.push([event.clientX,event.clientY]);
      //ctx.fillStyle = "rgb(0,255,0)";
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#0f0';
      ctx.ellipse(bolinha[n][0]-(c/2),bolinha[n][1]-(c/2),c,c,0,0,2*Math.PI);
      ctx.stroke();
      n++;
  }
}

document.addEventListener("click", mousePosition);

let permissao = false;

function criarInter() {
  ctx.fillStyle = "rgb(0,255,0)";
  for (let i = 0; i < n; i++) {
      ctx.fillRect(bolinha[i][0],bolinha[i][1],15,15);
  }
  permissao = true;
}

function criarRota() {
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#0f0';
      if (n != 0) {
          ctx.moveTo(bolinha[n-1][0]-(c/2),bolinha[n-1][1]-(c/2));
          ctx.lineTo(bolinha[n][0]-(c/2),bolinha[n][1]-(c/2));
      }
      ctx.stroke();
  }
}


const bola = document.getElementById("algo");
bola.addEventListener("click", function() {
  bola.style.display = "none";
});

const criRota = document.getElementById("criarRota");
criRota.addEventListener("click", function() {
  criRota.style.display = "none";
  criInter.style.display = "none";
  conRota.style.display = "inline-block";
  bola.style.display = "none";
  criarRota();
});

const conRota = document.getElementById("confirmarRota");
conRota.addEventListener("click", function() {
  conRota.style.display = "none";
  bola.style.display = "inline-block";
  criRota.style.display = "inline-block";
  criInter.style.display = "inline-block";
});

const criInter = document.getElementById("criarInter");
criInter.addEventListener("click", function() {
  criRota.style.display = "none";
  criInter.style.display = "none";
  bola.style.display = "none";
  conInter.style.display = "inline-block";
  canvas.style.display = "inline-block";
  criarInter();
});

const conInter = document.getElementById("confirmarInter");
conInter.addEventListener("click", function() {
  conInter.style.display = "none";
  bola.style.display = "inline-block";
  criRota.style.display = "inline-block";
  criInter.style.display = "inline-block";
  permissao  = false;
  canvas.style.display = "none";
});
