class Submarino {
    constructor() {
			// Inicializo las variables que voy a usar a 0
				this.size = 0;
        this.x = 0;
        this.y = 0;
        console.log("El submarino se ha creado");
    }

    init(size) {
			this.size = size;
        this.x = Math.floor(Math.random()*size);
        this.y = Math.floor(Math.random()*size);
				console.log(this.x);
				console.log(this.y);
    }

		moverPosicion() {
			let meMovi = false;
				// Si no se mueve, elige otra dirección 
			while(!meMovi) {
				// Para que se mueva de forma aleatoria
				switch(Math.floor(Math.random()*3)) {
					case 0:
						// Los ifs controlan que no salga del tablero
						if(this.y > 0) {
							// Arriba
							this.y -= 1;
							meMovi = true;
						}
					break;

					case 1:
						if(this.x < this.size - 1) {
							// Derecha
							this.x += 1;
							meMovi = true;
						}
						
					break;

					case 2:
						if(this.y < this.size - 1) {
							// Abajo
							this.y += 1;
							meMovi = true;
						}
					break;

					case 3:
						if(this.x > 0) {
							// Izquierda
							this.x -= 1;
							meMovi = true;
						}
					break;

				}
			}
		}
}

// Igual que el export del ES module pero con la sintaxis del commonjs 
exports.Submarino = Submarino