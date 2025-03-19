class Config extends Scene{
    
    #LabelName1 = null;
    #LabelName2 = null;
    
    constructor(container){
        super(container);

        this.#LabelName1 = document.getElementById("LabelName1");
        this.#LabelName2 = document.getElementById("LabelName2");

        
    }

    #PlayerSet(){
        var options = {
            player1: {
                nombre: this.#LabelName1.value;
                src:
            },
            player2:{
                nombre:
                src:
            }
        }
    }

    #createList() {
        fetch("https://dragonball-api.com/api/characters?page=1&limit=10")
            .then((response) => response.json())
            .then((data) => {
                for (var i = 0; i < data.meta.itemCount; i++) {
                    var img1 = document.createElement("img");
                    img1.src = data.items[i].image;
                    img1.addEventListener("click", this.#selectImg1)
                    imageList1.appendChild(img1);
                    var img2 = document.createElement("img");
                    img2.src = data.items[i].image;
                    imageList2.appendChild(img2);
                    img2.addEventListener("click", this.#selectImg2)
                }
            });
    }
    start(){

    }
    stop(){

    }
    restart(){

    }
}