class Config extends Scene{
    #Audio = null;
    #LabelName1 = null;
    #LabelName2 = null;
    #ImageList1 = null;
    #ImageList2 = null;
    #ImagenURL1 = null;
    #ImagenURL2 = null;
    
    constructor(container){
        super(container);

        this.#LabelName1 = document.getElementById("LabelName1");
        this.#LabelName2 = document.getElementById("LabelName2");
        this.#ImageList1 = document.getElementById("imageList1");
        this.#ImageList2 = document.getElementById("imageList2");
        this.#createList()
        
    }

    #PlayerSet(){
        var options = {
            player1: {
                nombre: this.#LabelName1.value,
                src: this.#ImagenURL1.src
            },
            player2:{
                nombre: this.#LabelName2.value,
                src: this.#ImagenURL2.src
            }
        }
    }

    async #createList() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            .then((response) => response.json())
            .then(async (data) => {
                for (var i = 0; i < data.results.length; i++) {
                    await fetch(data.results[i].url)
                        .then((response) => response.json())
                        .then((pokemon) => {
                            var img1 = document.createElement("img");
                            img1.src = pokemon.sprites.front_default;
                            img1.addEventListener("click", this.#selectImg1)
                            this.#ImageList1.appendChild(img1);
                        });
                }
            });
    }
    #selectImg1 = () => {
        if (this.#ImagenURL1 != null) {

            this.#ImagenURL1.style.backgroundColor = ""
        }
        this.#ImagenURL1 = event.target;
        this.#ImagenURL1.style.backgroundColor = "cyan";
    }
    start(){

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