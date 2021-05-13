namespace Kapitelaufgabe {

    export interface Parts {
        symbols: string[];
        shields: string[];
        shieldColors: string[];
    }
    
    let parts: Parts = JSON.parse(partsJSON);

    let symbolOptionPanel: HTMLDivElement = <HTMLDivElement> document.getElementById("symbolOptionPanel");
    let shieldOptionPanel: HTMLDivElement = <HTMLDivElement> document.getElementById("shieldOptionPanel");
    let shieldColorOptionPanel: HTMLDivElement = <HTMLDivElement> document.getElementById("shieldColorOptionPanel");
    let finalPictureDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("finalPictureDiv");
    
    let optionImages: NodeListOf<HTMLImageElement>;

    
    if (symbolOptionPanel != null || shieldOptionPanel != null || shieldColorOptionPanel != null) {
        if (symbolOptionPanel != null) showOptions(symbolOptionPanel, parts.symbols);
        if (shieldOptionPanel != null) showOptions(shieldOptionPanel, parts.shields);
        if (shieldColorOptionPanel != null) showOptions(shieldColorOptionPanel, parts.shieldColors);
        optionImages = document.querySelectorAll(".option"); //showOptions has to be called before, otherwise empty
        makeOptionsClickable(optionImages);
    }

    if (finalPictureDiv != null) {
        drawFinalPicture();
        addBorder();
    }

    function addBorder(): void {
        let borderImg: HTMLImageElement = document.createElement("img");
        borderImg.setAttribute("src", "./media/border.png");
        borderImg.setAttribute("id", "finalBorder");
        borderImg.setAttribute("class", "finalPart");
        finalPictureDiv.appendChild(borderImg);
    }

    function drawFinalPicture(): void {
        let symbolImg: HTMLImageElement = document.createElement("img");
        let shieldImg: HTMLImageElement = document.createElement("img");
        let shieldColorImg: HTMLImageElement = document.createElement("img");

        symbolImg.setAttribute("src", localStorage.getItem("symbol"));
        shieldImg.setAttribute("src", localStorage.getItem("shield"));
        shieldColorImg.setAttribute("src", localStorage.getItem("shieldColor")); 

        symbolImg.setAttribute("id", "finalSymbol");
        shieldImg.setAttribute("id", "finalShield");
        shieldColorImg.setAttribute("id", "finalColor");

        symbolImg.setAttribute("class", "finalPart");
        shieldImg.setAttribute("class", "finalPart");
        shieldColorImg.setAttribute("class", "finalPart");

        finalPictureDiv.appendChild(shieldColorImg);
        finalPictureDiv.appendChild(shieldImg);
        finalPictureDiv.appendChild(symbolImg);
    }
   
    function showOptions(_optionPanel: HTMLDivElement, _partArr: string[]): void {
        for (let i: number = 0; i < _partArr.length; i++) {
            let temp: HTMLImageElement = document.createElement("img");
            temp.setAttribute("src", String(_partArr[i]));
            temp.setAttribute("class", "option");
            _optionPanel.appendChild(temp);
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
        if (shieldOptionPanel != null) { 
            localStorage.setItem("shield", _e.src);
        }
        if (shieldColorOptionPanel != null) {
            localStorage.setItem("shieldColor", _e.src);
        }
        if (symbolOptionPanel != null) {
            localStorage.setItem("symbol", _e.src);
        }
    }
}
