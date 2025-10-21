// Hace lo mismo que import pero para la versión antigua 
const tableromod = require("./Tablero.js")
const prompt = require('prompt-sync')();

const config = {}

const tablero_size = prompt("Introduce el tamaño del tablero: ");
config.size = tablero_size;

const tablero = new tableromod.Tablero();
tablero.init(config);

let disparo = prompt("Dispara la bomba:");
let disparo_coords = disparo.split(',');

// Compruebo si he dado al submarino, y en caso de que no, muevo el submarino y repito el disparo
while(tablero.comprobarDisparo(disparo_coords[0], disparo_coords[1]) == false) {
	disparo = prompt("Has fallado, prueba otra vez:");
	// El split me genera un array con los valores del prompt separados por coma 
	disparo_coords = disparo.split(',');

}

console.log("Guay, 9/11");

// document.getElementById("bloque").innerHTML = "pepe";
// document.getElementById("tablero").innerHTML = ;


