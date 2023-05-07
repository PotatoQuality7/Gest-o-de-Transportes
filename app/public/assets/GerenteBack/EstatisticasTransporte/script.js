const canvas = document.getElementById("papel");
const width = canvas.width = window.innerWidth-50;
const height = canvas.height = 420;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(0,height-20,width,20);
ctx.fillStyle = "rgb(0,0,0)";
let max = 22;
for (let i = 1; i <= (height/10); i += 2) {
    for (let j = 1; j <= 17; j++) {
         ctx.fillRect(j*(width/18),(height-22)-(10*i),2,10);
         ctx.font = "12px Arial";
         ctx.fillText((j+5)+"H",(j*(width/18))-8,height-5);
    }
}
let c = 10;
//ctx2.linewidth2 = 5;
ctx.fillStyle = '#0af';
for (let j = 1; j <= 17; j++) {
     let i = (height-20)-((height-20)*Math.random());
     ctx.beginPath();
     ctx.ellipse(j*(width/18)+2,height-20-i,c,c,0,0,2*Math.PI);
     ctx.fill();
     ctx.closePath();
}


const canvas2 = document.getElementById("papel2");
const width2 = canvas2.width = window.innerWidth-50;
let height2 = canvas2.height = 420;
const ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "rgb(255,255,255)";
ctx2.fillRect(0,height2-20,width2,20);
ctx2.fillStyle = "rgb(0,0,0)";
max = 22;
for (let i = 1; i <= (height2/10); i += 2) {
    for (let j = 1; j <= 17; j++) {
         ctx2.fillRect(j*(width2/18),(height2-22)-(10*i),2,10);
         ctx2.font = "12px Arial";
         ctx2.fillText((j+5)+"H",(j*(width2/18))-8,height2-5);
    }
}
c = 10;
//ctx2.linewidth2 = 5;
ctx2.fillStyle = '#0af';
for (let j = 1; j <= 17; j++) {
     let i = (height2-20)-((height2-20)*Math.random());
     ctx2.beginPath();
     ctx2.ellipse(j*(width2/18)+2,height2-20-i,c,c,0,0,2*Math.PI);
     ctx2.fill();
     ctx2.closePath();
}

const bitao = document.getElementById("bitao");
const tit = document.getElementById("tit");
bitao.addEventListener("click", function() {
  papel.style.display = "none";
  tit.style.display = "none";
  height2 = canvas2.height = 700;

  for (let i = 1; i <= (height2/10); i += 2) {
     for (let j = 1; j <= 17; j++) {
          ctx2.fillRect(j*(width2/18),(height2-22)-(10*i),2,10);
          ctx2.font = "12px Arial";
          ctx2.fillText((j+5)+"H",(j*(width2/18))-8,height2-5);
     }
 }
 c = 10;
 //ctx2.linewidth2 = 5;
 ctx2.fillStyle = '#0af';
 for (let j = 1; j <= 17; j++) {
      let i = (height2-20)-((height2-20)*Math.random());
      ctx2.beginPath();
      ctx2.ellipse(j*(width2/18)+2,height2-20-i,c,c,0,0,2*Math.PI);
      ctx2.fill();
      ctx2.closePath();
 }
});
