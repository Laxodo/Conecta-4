class Tablero extends Scene{
    #Tablero = null;
    #TableroAux = null;
    #Fila = 6;
    #Columna = 7;
    #Turno = true;
    _Options = null;
    #Audio = null;
    #AudioSrc = "sources/BubbleBobbleMainTheme.mp3";

    constructor(container, _Options){
        super(container);
        this._Options = _Options;
        this.#Audio = document.getElementById("AudioLabel");
        this.#Audio.src = this.#AudioSrc;
        this.#Tablero = Array.from({length: this.#Fila}, () => Array(this.#Columna).fill(null));
        this.#TableroAux = Array.from({length: this.#Fila}, () => Array(this.#Columna).fill(null));
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
                for (var i = 0; i < this.#Fila; i++) {
                    for (var j = 0; j < this.#Columna; j++) {
                        if (this.#Tablero[i][j] == node) {
                            while (i < this.#Fila - 1 && this.#Tablero[i + 1][j].childNodes.length === 0) {
                                i++;
                            }
                            var ficha = document.createElement("div");
                            ficha.classList.add("ficha");
                            if (this.#Turno) {
                                ficha.style.backgroundImage = "url('" + this._Options.Jugador1.url + "')";
                            } else {
                                ficha.style.backgroundImage = "url('" + this._Options.Jugador2.url + "')";
                            }
                            this.#Tablero[i][j].appendChild(ficha);
                            this.#TableroAux[i][j] = this.#Turno;
                            this.#ToggleTurn();
                            break;
                        }
                    }
                }
            }
        })
        return nodo;
    }
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