class Tablero extends Scene{
    #Audio = null;
    constructor(container){
        super(container);
        this.#Audio = document.getElementById("Audio");
    }
    start(){
        if(this.#Audio != null){
            if(this.#Audio != null){
                this.#Audio.setAttribute("src", "sources/sounds/BubbleBobbleTheme.mp3");
                this.#Audio.play();
            }
        }
    }
    stop(){

    }
    restart(){

    }
}