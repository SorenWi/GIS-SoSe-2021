"use strict";
var Kapitelaufgabe;
(function (Kapitelaufgabe) {
    let symbolOptionPanel = document.getElementById("symbolOptionPanel");
    let shieldOptionPanel = document.getElementById("shieldOptionPanel");
    let shieldColorOptionPanel = document.getElementById("shieldColorOptionPanel");
    let finalPictureDiv = document.getElementById("finalPictureDiv");
    let optionImages;
    let parts;
    buildAll();
    send("https://gis-communication.herokuapp.com/");
    async function send(_url) {
        let query = ((localStorage.getItem("symbol") != null) ? "symbol=" + localStorage.getItem("symbol") + "&" : "") +
            ((localStorage.getItem("shield") != null) ? "shield=" + localStorage.getItem("shield") + "&" : "") +
            ((localStorage.getItem("shieldColor") != null) ? "shieldColor=" + localStorage.getItem("shieldColor") : "");
        _url = _url + "?" + query;
        let response = await fetch(_url);
        let responseJSON = await response.json();
        let messageDiv = document.getElementById("message");
        if (finalPictureDiv != null) {
            if (responseJSON.error != null) {
                messageDiv.innerHTML = "Error: " + responseJSON.error;
                messageDiv.style.color = "red";
            }
            if (responseJSON.message != null) {
                messageDiv.innerHTML = "Nachricht: " + responseJSON.message;
                messageDiv.style.color = "#5f5";
            }
        }
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        return await response.json();
    }
    async function buildAll() {
        parts = await communicate("https://sorenwi.github.io/GIS-SoSe-2021/Kapitel2/Kapitelaufgabe/data.json");
        showAll();
    }
    function showAll() {
        if (symbolOptionPanel != null || shieldOptionPanel != null || shieldColorOptionPanel != null) {
            if (symbolOptionPanel != null)
                showOptions(symbolOptionPanel, parts.symbols);
            if (shieldOptionPanel != null)
                showOptions(shieldOptionPanel, parts.shields);
            if (shieldColorOptionPanel != null)
                showOptions(shieldColorOptionPanel, parts.shieldColors);
            optionImages = document.querySelectorAll(".option");
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
    }
    function showChosen() {
        let options = ["symbol", "shield", "shieldColor"];
        let optionId = ["chooseSymbol", "chooseShield", "chooseShieldColor"];
        for (let i = 0; i < options.length; i++) {
            if (localStorage.getItem(options[i]) == null) {
                let notChosen = document.createElement("p");
                notChosen.appendChild(document.createTextNode("(nichts ausgewählt)"));
                notChosen.setAttribute("class", "chosen");
                document.getElementById(optionId[i]).appendChild(notChosen);
            }
            else {
                let chosenImg = document.createElement("img");
                chosenImg.setAttribute("src", localStorage.getItem(options[i]));
                chosenImg.setAttribute("class", "chosen");
                document.getElementById(optionId[i]).appendChild(chosenImg);
            }
        }
    }
    function resetBtnFunctionality() {
        let newBtn = document.getElementById("makeNew");
        newBtn.addEventListener("click", function () {
            localStorage.removeItem("symbol");
            localStorage.removeItem("shield");
            localStorage.removeItem("shieldColor");
        });
    }
    function addBorder() {
        let borderImg = document.createElement("img");
        borderImg.setAttribute("src", "./media/border.png");
        borderImg.setAttribute("id", "finalBorder");
        borderImg.setAttribute("class", "finalPart");
        finalPictureDiv.appendChild(borderImg);
    }
    function drawFinalPicture() {
        if (localStorage.getItem("symbol") != null) {
            let symbolImg = document.createElement("img");
            symbolImg.setAttribute("src", localStorage.getItem("symbol"));
            symbolImg.setAttribute("id", "finalSymbol");
            symbolImg.setAttribute("class", "finalPart");
            finalPictureDiv.appendChild(symbolImg);
        }
        if (localStorage.getItem("shield") != null) {
            let shieldImg = document.createElement("img");
            shieldImg.setAttribute("src", localStorage.getItem("shield"));
            shieldImg.setAttribute("id", "finalShield");
            shieldImg.setAttribute("class", "finalPart");
            finalPictureDiv.appendChild(shieldImg);
        }
        if (localStorage.getItem("shieldColor") != null) {
            let shieldColorImg = document.createElement("img");
            shieldColorImg.setAttribute("src", localStorage.getItem("shieldColor"));
            shieldColorImg.setAttribute("id", "finalColor");
            shieldColorImg.setAttribute("class", "finalPart");
            finalPictureDiv.appendChild(shieldColorImg);
        }
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
        if (shieldOptionPanel != null)
            localStorage.setItem("shield", _e.src);
        if (shieldColorOptionPanel != null)
            localStorage.setItem("shieldColor", _e.src);
        if (symbolOptionPanel != null)
            localStorage.setItem("symbol", _e.src);
    }
})(Kapitelaufgabe || (Kapitelaufgabe = {}));
//# sourceMappingURL=script.js.map