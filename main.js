const btnmais = document.getElementById("mais");
const btnmenos = document.getElementById("menos");
const cont = document.getElementById("contador");
const bin = document.getElementById("binario");
const oct = document.getElementById("octal");
const hex = document.getElementById("hexa");

let contador = 0;
let binario = 0;
let octal = 0;
let hexa = 0;

cont.innerHTML = contador;
bin.innerHTML = binario;
oct.innerHTML = octal;
hex.innerHTML = hexa;

btnmais.onclick = function aumentar () {
	contador++;
	cont.innerHTML = contador;
	let binario = contador.toString(2);
	bin.innerHTML = binario;
	let octal = contador.toString(8);
	oct.innerHTML = octal;
	let hexa = contador.toString(16);
	hex.innerHTML = hexa;
}

btnmenos.onclick = function diminuir () {
	contador--;
	cont.innerHTML = contador;
	let binario = contador.toString(2);
	bin.innerHTML = binario;
	let octal = contador.toString(8);
	oct.innerHTML = octal;
	let hexa = contador.toString(16);
	hex.innerHTML = hexa;
}