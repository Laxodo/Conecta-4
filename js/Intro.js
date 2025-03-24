class Intro extends Scene{
    #Audio = null;
    constructor(container){
        super(container);
        this.#Audio = document.getElementById("Audio");
    }
    start(){
        
    }

    start(){
        document.getElementById("Titulo").innerHTML = "Intro";
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