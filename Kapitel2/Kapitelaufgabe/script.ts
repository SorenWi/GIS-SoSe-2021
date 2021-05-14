namespace Kapitelaufgabe {

    export interface Parts {
        symbols: string[];
        shields: string[];
        shieldColors: string[];
    }
    
    let parts: Parts = parseJSON(partsJSON);

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
        resetBtnFunctionality();
    }

    if (symbolOptionPanel == null && shieldOptionPanel == null && shieldColorOptionPanel == null && finalPictureDiv == null) {
        showChosen();     
    }

    function showChosen(): void {
        let options: string[] = ["symbol", "shield", "shieldColor"];
        let optionId: string[] = ["chooseSymbol", "chooseShield", "chooseShieldColor"];

        for (let i: number = 0; i < options.length; i++) {
            if (localStorage.getItem(options[i]) == null) {
                let notChosen: HTMLParagraphElement = document.createElement("p");
                notChosen.appendChild(document.createTextNode("(nichts ausgewählt)"));
                notChosen.setAttribute("class", "chosen");
                document.getElementById(optionId[i]).appendChild(notChosen);
            } else {
                let chosenImg: HTMLImageElement = document.createElement("img");
                chosenImg.setAttribute("src", localStorage.getItem(options[i]));
                chosenImg.setAttribute("class", "chosen");
                document.getElementById(optionId[i]).appendChild(chosenImg);
            }
        }
    }

    function resetBtnFunctionality(): void {
        let newBtn: HTMLAnchorElement = <HTMLAnchorElement> document.getElementById("makeNew");
        newBtn.addEventListener("click", function(): void {
            localStorage.removeItem("symbol");
            localStorage.removeItem("shield");
            localStorage.removeItem("shieldColor");
        });
    }

    function addBorder(): void {
        let borderImg: HTMLImageElement = document.createElement("img");
        borderImg.setAttribute("src", "./media/border.png");
        borderImg.setAttribute("id", "finalBorder");
        borderImg.setAttribute("class", "finalPart");
        finalPictureDiv.appendChild(borderImg);
    }

    function drawFinalPicture(): void {
        if (localStorage.getItem("symbol") != null) {
            let symbolImg: HTMLImageElement = document.createElement("img");
            symbolImg.setAttribute("src", localStorage.getItem("symbol"));
            symbolImg.setAttribute("id", "finalSymbol");
            symbolImg.setAttribute("class", "finalPart");
            finalPictureDiv.appendChild(symbolImg);
        }
        if (localStorage.getItem("shield") != null) {
            let shieldImg: HTMLImageElement = document.createElement("img");
            shieldImg.setAttribute("src", localStorage.getItem("shield"));
            shieldImg.setAttribute("id", "finalShield");
            shieldImg.setAttribute("class", "finalPart");
            finalPictureDiv.appendChild(shieldImg);
        }
        if (localStorage.getItem("shieldColor") != null) {
            let shieldColorImg: HTMLImageElement = document.createElement("img");
            shieldColorImg.setAttribute("src", localStorage.getItem("shieldColor")); 
            shieldColorImg.setAttribute("id", "finalColor");
            shieldColorImg.setAttribute("class", "finalPart");
            finalPictureDiv.appendChild(shieldColorImg);
        }
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

    function parseJSON(_json: string): Parts {
        return JSON.parse(_json);
    }
}
