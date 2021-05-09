"use strict";
var Kapitelaufgabe;
(function (Kapitelaufgabe) {
    class Picture {
        setFlower(_flower) {
            this.flower = _flower;
        }
    }
    let finalPicture = new Picture();
    let flowerOptionPanel = document.getElementById("flowerOptionPanel");
    let optionImages;
    if (flowerOptionPanel != null) {
        showFlowerOptions();
        optionImages = document.querySelectorAll(".option"); //showOptions has to be called before, otherwise empty
        makeOptionsClickable(optionImages);
    }
    function showFlowerOptions() {
        for (let i = 0; i < Kapitelaufgabe.parts.flowers.length; i++) {
            let temp = document.createElement("img");
            temp.setAttribute("src", String(Kapitelaufgabe.parts.flowers[i]));
            temp.setAttribute("class", "option");
            flowerOptionPanel.appendChild(temp);
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
        finalPicture.setFlower(_e.src);
        console.log(finalPicture.flower); //Geben Sie die Variable, in der die Auswahl gespeichert ist, auf der Konsole aus.
    }
})(Kapitelaufgabe || (Kapitelaufgabe = {}));
//# sourceMappingURL=script.js.map