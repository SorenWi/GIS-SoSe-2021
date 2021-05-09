"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe 1
    let divRectArr = []; //Array mit allen divs welche Rechtecke darstellen sollen
    let rectStartingTop = []; //Speichert den Startwert top für die zu beginn gezeichneten Rechtecke
    let rectStartingLeft = []; //Speichert den Startwert left für die zu beginn gezeichneten Rechecke
    let rectScaling = 2; //je höher desto kleiner die Rechtecke
    let minScaling = 3; //je höher desto kleiner die minimale Breite/Höhe
    let maxRectSize = (window.innerHeight > window.innerWidth) ? window.innerWidth / rectScaling : window.innerHeight / rectScaling;
    let minRectSize = (window.innerHeight > window.innerWidth) ? (window.innerWidth / rectScaling) / minScaling : (window.innerHeight / rectScaling) / minScaling;
    let startRectAmount = 5; //Anzahl der Rechtecke die zu beginn gezeichnet werden
    //Zeichnet zu beginn n Rechtecke
    function drawStartingRectangles(_n) {
        for (let i = 0; i < _n; i++) {
            divRectArr.push(document.createElement("div"));
        }
        for (let i = 0; i < divRectArr.length; i++) {
            drawRectangle(divRectArr[i]);
            rectStartingTop[i] = divRectArr[i].style.top;
            rectStartingLeft[i] = divRectArr[i].style.left;
            generateVelocity(i);
        }
    }
    //Zeichnet ein div als ein zufälliges Rechteck
    function drawRectangle(_divE) {
        document.body.appendChild(_divE);
        _divE.style.width = Math.floor(minRectSize + Math.random() * ((maxRectSize - minRectSize) + 1)) + "px";
        _divE.style.height = Math.floor(minRectSize + Math.random() * ((maxRectSize - minRectSize) + 1)) + "px";
        _divE.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        _divE.style.position = "absolute";
        _divE.style.top = Math.floor(Math.random() * (window.innerHeight - parseInt(_divE.style.height))) + "px";
        _divE.style.left = Math.floor(Math.random() * (window.innerWidth - parseInt(_divE.style.width))) + "px";
    }
    //Fügt ein Recheck hinzu
    function addRectangle() {
        divRectArr.push(document.createElement("div"));
        drawRectangle(divRectArr[divRectArr.length - 1]);
        generateVelocity(divRectArr.length - 1);
    }
    //Fügt einen Button hinzu mit dem man weitere Rechtecke hinzufügen kann
    function addAddBtn() {
        let addBtn = document.createElement("button");
        addBtn.appendChild(document.createTextNode("Rechteck hinzufügen"));
        document.body.appendChild(addBtn);
        addBtn.style.position = "relative";
        addBtn.style.zIndex = "2";
        addBtn.addEventListener("click", function () {
            addRectangle();
        });
    }
    //Removes all added Rectangles
    function addResetBtn() {
        let resetBtn = document.createElement("button");
        resetBtn.appendChild(document.createTextNode("Reset"));
        document.body.appendChild(resetBtn);
        resetBtn.style.position = "relative";
        resetBtn.style.zIndex = "2";
        resetBtn.addEventListener("click", function () {
            for (let i = startRectAmount; i < divRectArr.length; i++) {
                divRectArr[i].remove();
            }
            for (let i = 0; i < startRectAmount; i++) {
                divRectArr[i].style.top = rectStartingTop[i];
                divRectArr[i].style.left = rectStartingLeft[i];
            }
        });
    }
    let vX = [];
    let vY = [];
    let maxSpeed = 3;
    //Werte für Geschwindikeiten generieren
    function generateVelocity(_i) {
        vX[_i] = Math.random() * (maxSpeed * 2) - maxSpeed;
        vY[_i] = Math.random() * (maxSpeed * 2) - maxSpeed;
    }
    //Update Rechteck Position
    function updateRect() {
        for (let i = 0; i < divRectArr.length; i++) {
            divRectArr[i].style.left = parseInt(divRectArr[i].style.left) + vX[i] + "px";
            divRectArr[i].style.top = parseInt(divRectArr[i].style.top) + vY[i] + "px";
        }
    }
    function addEpilepsieBtn() {
        let epilepsieBtn = document.createElement("button");
        epilepsieBtn.appendChild(document.createTextNode("nicht klicken falls Epilepsie (can't be stopped (unless page is reloaded), you've been warned"));
        document.body.appendChild(epilepsieBtn);
        epilepsieBtn.style.position = "relative";
        epilepsieBtn.style.zIndex = "2";
        epilepsieBtn.addEventListener("click", function () {
            setInterval(addRectangle, 1);
        });
    }
    document.body.style.overflow = "hidden";
    drawStartingRectangles(startRectAmount);
    addAddBtn();
    addResetBtn();
    addEpilepsieBtn();
    setInterval(updateRect, 15);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map