"use strict";
var Kapitelaufgabe;
(function (Kapitelaufgabe) {
    let parts = JSON.parse(Kapitelaufgabe.partsJSON);
    let symbolOptionPanel = document.getElementById("symbolOptionPanel");
    let shieldOptionPanel = document.getElementById("shieldOptionPanel");
    let shieldColorOptionPanel = document.getElementById("shieldColorOptionPanel");
    let finalPictureDiv = document.getElementById("finalPictureDiv");
    let optionImages;
    if (symbolOptionPanel != null || shieldOptionPanel != null || shieldColorOptionPanel != null) {
        if (symbolOptionPanel != null)
            showOptions(symbolOptionPanel, parts.symbols);
        if (shieldOptionPanel != null)
            showOptions(shieldOptionPanel, parts.shields);
        if (shieldColorOptionPanel != null)
            showOptions(shieldColorOptionPanel, parts.shieldColors);
        optionImages = document.querySelectorAll(".option"); //showOptions has to be called before, otherwise empty
        makeOptionsClickable(optionImages);
    }
    if (finalPictureDiv != null) {
        drawFinalPicture();
        addBorder();
    }
    function addBorder() {
        let borderImg = document.createElement("img");
        borderImg.setAttribute("src", "./media/border.png");
        borderImg.setAttribute("id", "finalBorder");
        borderImg.setAttribute("class", "finalPart");
        finalPictureDiv.appendChild(borderImg);
    }
    function drawFinalPicture() {
        let symbolImg = document.createElement("img");
        let shieldImg = document.createElement("img");
        let shieldColorImg = document.createElement("img");
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
    function showOptions(_optionPanel, _partArr) {
        for (let i = 0; i < _partArr.length; i++) {
            let temp = document.createElement("img");
            temp.setAttribute("src", String(_partArr[i]));
            temp.setAttribute("class", "option");
            _optionPanel.appendChild(temp);
        }
    }
    //Makes options clickable
    function makeOptionsClickable(_options) {
        optionImages.forEach(e => {
            e.addEventListener("click", function () {
                highlightSelected(e);
            });
        });
    }
    //Highligts parameter element
    function highlightSelected(_e) {
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
})(Kapitelaufgabe || (Kapitelaufgabe = {}));
//# sourceMappingURL=script.js.map