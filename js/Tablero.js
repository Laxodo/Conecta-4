class Tablero extends Scene{
    #Tablero = null;
    #Fila = 6;
    #Columna = 7;
    #Turno = null;
    _Options = null;
    #Audio = null;
    #AudioSrc = "sources/BubbleBobbleMainTheme.mp3";

    constructor(container, _Options){
        super(container);
        this._Options = _Options;
        this.#Audio = document.getElementById("AudioLabel");
        this.#Audio.src = this.#AudioSrc;
        this.#Tablero = Array.from({length: this.#Fila}, () => Array(this.#Columna).fill(null));
        this.#CreateTable();
    }

    #CreateTable(){
        var Nodo;
        for (var i = 0; i < this.#Fila; i++) {
            var fila = document.createElement("div");
            fila.classList.add("fila");
            document.getElementById("Tablero").appendChild(fila);
            
            for (var j = 0; j < this.#Columna; j++) {
                var nodo = this.#CreateNode();
                this.#Tablero[i][j] = nodo;
                fila.appendChild(nodo);
            }
        }
    }

    #CreateNode() {
        var nodo = document.createElement("div");
        nodo.classList.add("celda");
        nodo.addEventListener("click", (event) => {
            var node = event.target;
            if (!node.classList.contains("ficha")) {
                var ficha = document.createElement("div");
                ficha.classList.add("ficha");
                if (this.#Turno) {
                    console.log("Player 1");
                    ficha.style.backgroundImage = "url('" + this._Options.Jugador1.url + "')";
                    //ficha.classList.add("circle_playerOne")

                } else {
                    console.log("Player 2");
                    ficha.style.backgroundImage = "url('" + this._Options.Jugador2.url + "')"; 
                    //ficha.classList.add("circle_playerTwo")
                }
                this.#ToggleTurn();
                node.appendChild(ficha);
            }

        })
        return nodo;
    }

     /*
    #CreateNode() {
        var nodo = document.createElement("div");
        nodo.classList.add("celda");
        nodo.addEventListener("click", (event) => {
            var node = event.target;
            if (!node.classList.contains("ficha")) {
                for (var i = 0; i < this.#Fila; i++) {
                    for (var j = 0; j < this.#Columna; j++) {
                        if (this.#Tablero[i][j] == node) {
                            do{
                                j--;
                            }while(this.#Tablero[i][j] == null)
                                j++;
                                var ficha = document.createElement("div");
                                ficha.classList.add("ficha");
                                if (this.#Turno) {
                                    console.log("Player 1");
                                    ficha.style.backgroundImage = "url('" + this._Options.Jugador1.url + "')";
                                    //ficha.classList.add("circle_playerOne")

                                } else {
                                    console.log("Player 2");
                                    ficha.style.backgroundImage = "url('" + this._Options.Jugador2.url + "')"; 
                                    //ficha.classList.add("circle_playerTwo")
                                 }
                                this.#ToggleTurn();
                                this.#Tablero[i][j].appendChild(ficha);
                                i = this.#Fila;
                                j = this.#Columna;
                        }
                    }
                }
            }
        })
        return nodo;
    }
    */

    #Reset = () => {
        this.#Turno = false;
        for (var i = 0; i < this.#Fila; i++) {
            for (var j = 0; j < this.#Columna; j++) {

                if (this.#Tablero[i][j] != null && this.#Tablero[i][j].childNodes.length > 0) {
                    this.#Tablero[i][j].removeChild(this.#Tablero[i][j].firstChild);
                }
            }
        }
    }

    #ToggleTurn(){
        this.#Turno = !this.#Turno;
    }
    start(){
        document.getElementById("Titulo").innerHTML = "Tablero";
        if(this.#Audio != null){
            this.#Audio.play();
        }
    }
    stop(){
        if(this.#Audio != null){
            this.#Audio.pause();
        }
    }
    restart(){

    }
}