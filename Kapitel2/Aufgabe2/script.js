"use strict";
//Aufgabe 1
//a)
function min(...args) {
    let minNum = args[0];
    for (let value of args) {
        if (value < minNum) {
            minNum = value;
        }
    }
    return minNum;
}
//Zum testen
console.log(min(5, 13, 3, 19, 54, -1, 7));
//b)
/*
function isEven(_n: number): boolean {
    if (_n == 0) {
        return true;
    } else if (_n == 1) {
        return false;
    } else {
        return isEven(_n - 2);
    }
}
*/
/**
 * Bei -1 und generell jedem n < 0 läuft die Rekursion mit diesen Bedingungen unendlich da keine negative Zahl jemals 0 oder 1 wird egal wie oft man 2 abzieht
 * Um das Problem zu lösen muss man negative Zahlen miteinbeziehen
 * Möglichkeit 1: für negative Zahlen gilt:
 * "0 ist gerade, 1 ist ungerade, für jede andere Zahl n < 0 gilt: das Ergebnis ist gleich wie n + 2"
 */
/*
function isEven(_n: number): boolean {
    if (_n == 0) {
        return true;
    } else if (_n == 1) {
        return false;
    } else if (_n > 0) {
        return isEven(_n - 2);
    } else {
        return isEven(_n + 2);
    }
}
*/
/* Möglichkeit 2:
Ob eine Zahl gerade oder ungerade ist, ist unabhägig von dem Vorzeichen. Man kann das Vorzeichen also ignorieren
*/
function isEven(_n) {
    if (_n == 0) {
        return true;
    }
    else if (Math.abs(_n) == 1) {
        return false;
    }
    else {
        return isEven(Math.abs(_n) - 2);
    }
}
//Zum testen
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
//c)
//Interface Version
/*
interface Student {
    name: string;
    matrikelnummer: number;
    studiengang: string;
    semester: number;
}

let student1: Student = {name: "Sören Winterhalder", matrikelnummer: 266619, studiengang: "Medieninformatik", semester: 2};
let student2: Student = {name: "Max Mustermann", matrikelnummer: 123456, studiengang: "Musterstudiengang", semester: 3};
let student3: Student = {name: "Mira Musterfrau", matrikelnummer: 654321, studiengang: "Musterstudiengang", semester: 4};

let studentenArray: Student[] = [student1, student2, student3, {name: "Irgend Jemans", matrikelnummer: 162534, studiengang: "Irgendeinstudiengang", semester: 1}];


//Aufruf über Array
console.log(studentenArray[0].semester);
console.log(studentenArray[3].matrikelnummer);
//Aufruf über Variable
console.log(student2.studiengang);
console.log(student3.name);

function showInfo(_student: Student): void {
    console.log(` Name: ${_student.name} \n Matrikelnummer: ${_student.matrikelnummer} \n Studiengang: ${_student.studiengang} \n Semester: ${_student.semester}`);
}

//Aufruf über Variable
showInfo(student1);
showInfo(student2);
//Aufruf über Array
showInfo(studentenArray[2]);
showInfo(studentenArray[3]);
*/
//Klassen Version
class Student {
    constructor(_name, _matrikelnummer, _studiengang, _semester) {
        this.name = _name;
        this.matrikelnummer = _matrikelnummer;
        this.studiengang = _studiengang;
        this.semester = _semester;
    }
    showInfo() {
        console.log(` Name: ${this.name} \n Matrikelnummer: ${this.matrikelnummer} \n Studiengang: ${this.studiengang} \n Semester: ${this.semester}`);
    }
}
let student1 = new Student("Sören Winterhalder", 266619, "Medieninformatik", 2);
let student2 = new Student("Max Mustermann", 123456, "Musterstudiengang", 3);
let student3 = new Student("Mira Musterfrau", 654321, "Musterstudiengang", 4);
let studentenArray = [student1, student2, student3, new Student("Irgend Jemans", 162534, "Irgendeinstudiengang", 1)];
console.log(student1.studiengang);
console.log(student2.name);
console.log(studentenArray[2].matrikelnummer);
console.log(studentenArray[3].semester);
student1.showInfo();
student2.showInfo();
studentenArray[2].showInfo();
studentenArray[3].showInfo();
//Aufgabe 2
//a)
function backwards(_arr) {
    let returnArr = [];
    for (let value of _arr) {
        returnArr.unshift(value);
    }
    return returnArr;
}
//Alternative
/*
function backwards(_arr: number[]): number[] {
    let returnArr: number[] = [];
    for (let i: number = 0; i < _arr.length; i++) {
        returnArr[i] = _arr[_arr.length - i - 1];
    }
    return returnArr;
}
*/
//b)
function join(...args) {
    let returnArr = [];
    let counter = 0;
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            returnArr[counter] = args[i][j];
            counter++;
        }
    }
    return returnArr;
}
//c)
function split(_arr, _index1, _index2) {
    let returnArr = [];
    let counter = 0;
    //es wird mit dem kleineren index gestartet und endet mit dem größeren damit es egal ist in welcher reihenfolge die parameter übergeben wurden
    let start = (_index1 < _index2) ? _index1 : _index2;
    let end = (_index1 > _index2) ? _index1 : _index2;
    //Passt den start/end index an falls dieser nicht im array liegt
    if (start < 0)
        start = 0;
    if (end > _arr.length - 1)
        end = _arr.length - 1;
    for (let i = start; i <= end; i++) {
        returnArr[counter] = _arr[i];
        counter++;
    }
    return returnArr;
}
//Testcode
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0)); // Bonus c)
console.log(split(arr, -1, 2)); // Bonus c)
console.log(split(arr, 0, 7)); // Bonus c)
//Aufgabe 3
//a)
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//Bild
//Himmel
context.rect(0, 0, canvas.width, canvas.height);
context.fillStyle = "#0088ff";
context.fill();
//Wolke 1
context.beginPath();
context.moveTo(300, 170);
context.quadraticCurveTo(200, 120, 300, 90);
context.quadraticCurveTo(325, 50, 350, 80);
context.quadraticCurveTo(420, 10, 470, 110);
context.quadraticCurveTo(520, 130, 450, 160);
context.quadraticCurveTo(430, 220, 300, 170);
context.fillStyle = "#fff";
context.fill();
//Wolke 2
context.beginPath();
context.moveTo(1100, 270);
context.quadraticCurveTo(1000, 220, 1100, 190);
context.quadraticCurveTo(1125, 150, 1150, 180);
context.quadraticCurveTo(1220, 110, 1270, 210);
context.quadraticCurveTo(1320, 230, 1250, 260);
context.quadraticCurveTo(1230, 320, 1100, 270);
context.fillStyle = "#fff";
context.fill();
//Hügel 1
context.beginPath();
context.moveTo(540, 330);
context.quadraticCurveTo(850, 400, 1200, 400);
context.lineTo(1200, canvas.height);
context.lineTo(540, canvas.height);
context.fillStyle = "#65a040";
context.fill();
//Hügel 2
context.beginPath();
context.moveTo(0, 300);
context.quadraticCurveTo(230, -100, 1050, canvas.height);
context.lineTo(1100, canvas.height);
context.lineTo(0, canvas.height);
context.fillStyle = "#4c7830";
context.fill();
//Hügel 3
context.beginPath();
context.moveTo(1000, canvas.height);
context.quadraticCurveTo(1300, -300, canvas.width + 200, 300);
context.lineTo(canvas.width, canvas.height);
context.closePath();
context.fillStyle = "#588c38";
context.fill();
//Gras
context.beginPath();
context.moveTo(0, 650);
context.quadraticCurveTo(1200, 630, canvas.width, 650);
context.lineTo(canvas.width, canvas.height);
context.lineTo(0, canvas.height);
context.closePath();
context.fillStyle = "#7ec850";
context.fill();
//Haus
context.beginPath();
context.moveTo(100, 370);
context.lineTo(100, 670);
context.lineTo(400, 670);
context.lineTo(400, 370);
context.lineTo(250, 230);
context.closePath();
context.strokeStyle = "#000";
context.lineWidth = 15;
context.stroke();
context.fillStyle = "#fff";
context.fill();
//Dach
context.beginPath();
context.moveTo(70, 390);
context.lineTo(250, 200);
context.lineTo(430, 390);
context.lineTo(380, 390);
context.lineTo(250, 260);
context.lineTo(120, 390);
context.closePath();
context.lineWidth = 10;
context.stroke();
context.fillStyle = "#293133";
context.fill();
//Tür
context.beginPath();
context.rect(160, 540, 65, 130);
context.stroke();
context.fillStyle = "#5b3a29";
context.fill();
//Fenster
context.beginPath();
context.rect(290, 550, 25, 25);
context.rect(315, 550, 25, 25);
context.rect(290, 575, 25, 25);
context.rect(315, 575, 25, 25);
context.lineWidth = 5;
context.stroke();
//Fenster oben
context.beginPath();
context.moveTo(250, 350);
context.lineTo(300, 400);
context.lineTo(250, 450);
context.lineTo(200, 400);
context.lineTo(250, 350);
context.lineTo(250, 450);
context.moveTo(200, 400);
context.lineTo(300, 400);
context.lineJoin = "round";
context.stroke();
//Baum
//Stamm
context.beginPath();
context.rect(840, 500, 50, 170);
context.fillStyle = "#53350A";
context.fill();
//Blätter
context.beginPath();
context.moveTo(800, 520);
context.quadraticCurveTo(830, 550, 870, 520);
context.quadraticCurveTo(950, 550, 970, 480);
context.quadraticCurveTo(1020, 400, 950, 360);
context.quadraticCurveTo(900, 280, 800, 330);
context.quadraticCurveTo(730, 340, 750, 400);
context.quadraticCurveTo(720, 480, 800, 520);
context.fillStyle = "#2b6200";
context.fill();
//b) c) d) e)
let objectCanvas = document.getElementById("objectCanvas");
let objectContext = objectCanvas.getContext("2d");
class DrawingObject {
    constructor() {
        this.scale = 2; //je größer desto kleiner die Objekte
        this.height = Math.floor(Math.random() * (objectCanvas.height / this.scale));
        this.width = Math.floor(Math.random() * (objectCanvas.width) / this.scale);
        this.x = Math.floor(Math.random() * (objectCanvas.width - this.width));
        this.y = Math.floor(Math.random() * (objectCanvas.height - this.height));
        this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }
}
class Rectangle extends DrawingObject {
    constructor() {
        super();
    }
    drawRect() {
        objectContext.beginPath();
        objectContext.rect(this.x, this.y, this.width, this.height);
        objectContext.fillStyle = this.color;
        objectContext.fill();
    }
}
class Circle extends DrawingObject {
    constructor() {
        super();
    }
    drawCircle() {
        objectContext.beginPath();
        objectContext.arc(this.x, this.y, this.height, 2 * Math.PI, 0, true);
        objectContext.fillStyle = this.color;
        objectContext.fill();
    }
}
/*
//Rechteck Array generieren
let objectAmount: number = 5;
let objectArray: Rectangle[] = [];
for (let i: number = 0; i < objectAmount; i++) {
    objectArray.push(new Rectangle());
}

//individuelle Bewegungen generieren
let vX: number[] = [];
let vY: number[] = [];
for (let i: number = 0; i < objectArray.length; i++) {
    vX[i] = Math.floor(Math.random() * 8 - 4);
    vY[i] = Math.floor(Math.random() * 8 - 4);
}

//Position aktualisieren
function update(): void {
    for (let i: number = 0; i < objectArray.length; i++) {
        objectArray[i].x += vX[i];
        objectArray[i].y += vY[i];
    }
    drawAllObjects();
}

//Alle Rechtecke des Arrays zeichnen
function drawAllObjects(): void {
    objectContext.clearRect(0, 0, objectCanvas.width, objectCanvas.height);
   
    for (let values of objectArray) {
        values.drawRect();
    }
}
*/
//Kreis Version
let objectAmount = 5;
let objectArray = [];
for (let i = 0; i < objectAmount; i++) {
    objectArray.push(new Circle());
}
//individuelle Bewegungen generieren
let vX = [];
let vY = [];
for (let i = 0; i < objectArray.length; i++) {
    vX[i] = Math.floor(Math.random() * 8 - 4);
    vY[i] = Math.floor(Math.random() * 8 - 4);
}
//Position aktualisieren
function update() {
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].x += vX[i];
        objectArray[i].y += vY[i];
    }
    drawAllObjects();
}
//Alle Kreise des Arrays zeichnen
function drawAllObjects() {
    objectContext.clearRect(0, 0, objectCanvas.width, objectCanvas.height);
    for (let values of objectArray) {
        values.drawCircle();
    }
}
let intervalFunct = setInterval(update, 15);
setTimeout(function () { clearInterval(intervalFunct); }, 10000); //Stoppt nach 10 Sekunden
//# sourceMappingURL=script.js.map