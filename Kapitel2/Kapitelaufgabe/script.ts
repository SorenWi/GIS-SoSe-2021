namespace Kapitelaufgabe {
    class Picture {
        public background: string;
        public flowerPot: string;
        public flower: string;

        setFlower(_flower: string): void {
                this.flower = _flower;
        }
    }

    let finalPicture: Picture = new Picture();

    let flowerOptionPanel: HTMLDivElement = <HTMLDivElement> document.getElementById("flowerOptionPanel");
    let optionImages: NodeListOf<HTMLImageElement>;

    if (flowerOptionPanel != null) {
        showFlowerOptions();
        optionImages = document.querySelectorAll(".option"); //showOptions has to be called before, otherwise empty
        makeOptionsClickable(optionImages);
    }
   
    function showFlowerOptions(): void {
        for (let i: number = 0; i < parts.flowers.length; i++) {
            let temp: HTMLImageElement = document.createElement("img");
            temp.setAttribute("src", String(parts.flowers[i]));
            temp.setAttribute("class", "option");
            flowerOptionPanel.appendChild(temp);
        }
    }

    //Makes options clickable
    function makeOptionsClickable(_options: NodeListOf<HTMLImageElement>): void {
        optionImages.forEach(e => {
            e.addEventListener("click", function(): void {
                highlightSelected(e);
            });
        });
    }

    //Highligts parameter element
    function highlightSelected(_e: HTMLImageElement): void {
        optionImages.forEach(e => {
            e.setAttribute("class", "option");
        });
        _e.setAttribute("class", "optionSelected");
        finalPicture.setFlower(_e.src);
        console.log(finalPicture.flower); //Geben Sie die Variable, in der die Auswahl gespeichert ist, auf der Konsole aus.
    }
}
