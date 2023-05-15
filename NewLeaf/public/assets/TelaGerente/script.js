alert("Hmmm");
let usuario = JSON.parse(sessionStorage.getItem("usuario"));
let transportes = JSON.parse(sessionStorage.getItem("transportes"));
let preferencias = JSON.parse(sessionStorage.getItem("preferencias"));
let admin = JSON.parse(sessionStorage.getItem("admin"));

alert(transportes[2].cor);
