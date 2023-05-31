let top = document.getElementById("top");
let side = document.getElementById("side");
let back = document.getElementById("back");

let tw = 50;
let sw = 100;
let bw = back.style.left;

function algo() {
	tw--;
	sw--;
	bw--;
	top.style.width = tw+"%";
	side.style.width = sw+"%";
	back.style.left = bw+"px";
	if (sw == 90)
	    clearInterval(reps);
}

//let reps = setInterval(algo,500);
