class Game{
    #Scenes = [];
    #ActualScene = 0;
    #Container = null;
    #NextButton = document.getElementById("NextButton");
    #PreviousButton = document.getElementById("PreviousButton");

    constructor(Escena){
        this.#Container = document.querySelector(Escena);
        for(const child of this.#Container.querySelectorAll(".scene")){
            var id = child.getAttribute("id")
            var scene = null;
            switch(id){
                case "Intro":
                    scene = new Intro(child);
                    break;
                case "Config":
                    scene = new Config(child);
                    break;
                case "Game":
                    scene = new Tablero(child);
                    break;
                case "End":
                    scene = new End(child);
                    break;
            }
            if(scene != null){
                this.#Scenes.push(scene);
                console.log(this.#Scenes)
            }
        }
        
        this.#NextButton.addEventListener("click", this.#siguiente);
        this.#PreviousButton.addEventListener("click", this.#anterior);

        this.#update();
    }

    #update = () =>{
        this.#Scenes.forEach((element, index) =>{
            element._Container.classList.remove("active");
            if(index == this.#ActualScene){
                element._Container.classList.add("active");
                element.start();
            }else{
                element.stop();
            }
        });
    }
    #anterior = () =>{
        this.#ActualScene > 0 ? this.#ActualScene-- : 0;
        this.#update();
    }
    #siguiente = () =>{
        this.#ActualScene < (this.#Scenes.length - 1) ? this.#ActualScene++ : this.#ActualScene=0;
        this.#update();
    }
}