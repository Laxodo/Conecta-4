class Config extends Scene{
    #Audio = null;
    constructor(container){
        super(container);
    }
    start(){
        document.getElementById("Titulo").innerHTML = "Config";
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