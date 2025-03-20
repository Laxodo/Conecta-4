class Tablero extends Scene{
    #Audio = null;
    #AudioSrc = "sources/BubbleBobbleMainTheme.mp3";

    constructor(container){
        super(container);
        this.#Audio = document.getElementById("AudioLabel");
        this.#Audio.src = this.#AudioSrc;
    }
    start(){
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