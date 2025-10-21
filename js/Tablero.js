// Hace lo mismo que import pero para la versión antigua 
const submarinomod = require("./Submarino.js");

class Tablero {
    constructor() {
				console.log("El tablero se ha creado");
        this.submarino = new submarinomod.Submarino;
    }

    init(config) {
        this.size = config.size;
				console.log(config.size)
        this.submarino.init(this.size);

				// Inicializo el array de la posición X (columnas)
				this.casillas = [];
				for(let x = 0; x < this.size; x++) {
					// Inicializo los arrays de la posición Y (filas)
					this.casillas[x] = [];
					for(let y = 0; y < this.size; y++) {
						// Limpio el array y pongo todo a 0
						this.casillas[x][y] = 0;
					}
				}
				console.log(this.submarino.x, this.submarino.y);

				// Asigno a la posición del submarino el valor -1 
				this.casillas[this.submarino.x][this.submarino.y] = -1;
    }

		comprobarDisparo(x, y) {
			// Guardo si he dado al submarino
			let hundido = this.casillas[x][y] == -1;

			// Limpio la casilla donde estaba el submarino
			this.casillas[this.submarino.x][this.submarino.y] = 0;

			// Muevo el submarino y lo guardo en la nueva posición
			this.submarino.moverPosicion();
			console.log(this.submarino.x, this.submarino.y);
			this.casillas[this.submarino.x][this.submarino.y] = -1;

			// Devuelvo si le he dado
			return hundido;
		}
}

// Igual que el export del ES module pero con la sintaxis del commonjs 
exports.Tablero = Tablero
