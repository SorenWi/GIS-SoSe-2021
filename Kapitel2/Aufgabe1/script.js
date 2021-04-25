"use strict";
//Aufgabe 1
function a1() {
    let x = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
function func2() {
    console.log("Gute!");
}
/**
 * a)
 * Konsolenausgabe:
 * Alles
 * Klar?
 * Logo!
 *
 * Variablennamen dürfen keine Leerzeichen haben, sie müssen mit einem Buchstaben, Dollarzeichen oder Unterstrich anfangen
 * Der Variablenname darf nur Zahlen, Buchstaben, Untertriche und Dollarzeichen enthalten.
 *
 * b)
 * Zuerst wird die Funktion a1() ausgeführt, dann wird aus a1() die Funktion func1() aufgerufen
 * nachdem diese durchgelaufen ist geht es wieder in a1() weiter bis diese zuende ist.
 */
//Aufgabe 2
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/**
 * Konsolenausgabe: 9 8 7 6 5 4 3 2 1
 * i verändert sich in Zeile 44 mit jedem Durchlauf der do-while Schleife (wird um 1 mit jedem Durchlauf reduziert)
 * sobald i == 0 ist verändert sich der boolsche Wert der Bedingung der do-while Schleift zu false und die Schleife stoppt.
 */
//Aufgabe 4
let x = "Hallo";
console.log(x);
funct1(x);
console.log(x);
funct2();
funct3();
console.log(x);
function funct1(y) {
    y = "Bla";
    console.log(y);
}
function funct2() {
    let x = "Blubb";
    console.log(x);
}
function funct3() {
    x = "Test";
}
/**
 * a)
 * Ausgabe der Konsole: Hallo Bla Hallo Blubb Test
 *
 * > Zuerst wird "Hallo" ausgegeben da console.log(x) den String x welcher den Wert "Hallo" besitzt ausgibt.
 * > Dann wird "Bla" ausgegeben, funct1() wird zwar "Hallo" als Parameter y übergeben, y wird dann aber der Wert "Bla" zugewiesen und danach auf der Konsole ausgegeben.
 * > console.log(x) gibt wieder "Hallo" aus da sich x in der Zwischenzeit nicht verändert hat.
 * > In funct2() wird eine neue lokale Variable x erstellt und dieser der Wert "Blubb" zugewiesen, die Lokale Variable hat in diesem Block vorrang,
 *   daher gibt console.log(x) hier den Wert der lokalen Variable x aus ("Blubb") anstelle des Werts der globalen Variable x.
 * > in funct3() wird der globalen Variable x der Wert "Test" zugewiesen, diese Änderung bleibt bestehen auch nachdem funct3() zuende ist, daher gibt der nächste
 *   console.log(x)-Befehl "Test" aus.
 *
 * b)
 *
 * Globale Variablen: Können im Gesamten Code verwendet werden
 *
 * Lokale Variablen: Sind nur in dem Block/Bereich verfügbar in welchem sie Deklariert wurden
 *
 * Übergabeparameter: Beginnt mit dem Wert der als Paramter übergeben wurde und ist schon mit dem Namen welcher der Parameter hat deklariert, ist wie eine lokale Variable
 * in der Funktion nutzbar
 *
 * Inwiefern unterscheiden sich “normale” Variablen wie Zahlen und strings von Funktionen? Inwiefern sind sie gleich?
 * Variablen speichern Werte oder sind eine Referenz auf ein Objekt, Funktionen beinhalten Code und führen diesen aus wenn sie aufgerufen werden
 * Beide können durch aufrufen genutzt werden
 */
//Aufgabe 5
//a)
function multiply(_num1, _num2) {
    return _num1 * _num2;
}
//Zum testen
let multNum1 = 3;
let multNum2 = 5;
//console.log(multNum1 + " mal " + multNum2 + " = " + multiply(multNum1, multNum2));
//b)
function max(_num1, _num2) {
    return (_num1 > _num2) ? _num1 : _num2;
}
//Zum testen
let testNum1 = 200;
let testNum2 = 20;
//console.log("Von den Zahlen " + testNum1 + " und " + testNum2 + " ist " + max(testNum1, testNum2) + " die größere Zahl");
//c)
function summeHundert() {
    let result = 0;
    let i = 1;
    while (i <= 100) {
        result += i;
        i++;
    }
    console.log(result);
}
//summeHundert();
//d)
function zehnZufall() {
    for (let index = 0; index < 10; index++) {
        console.log(Math.random() * 100);
        //console.log(Math.floor(Math.random() * 100)); //Für ganze Zahlen
    }
}
//zehnZufall();
//e)
function factorial(_n) {
    let result = 1;
    for (let index = 1; index <= _n; index++) {
        result *= index;
    }
    return result;
}
//Zum testen
let factorialNum = 7;
//console.log("Die Fakultät von " + factorialNum + " ist gleich " + factorial(factorialNum));
//f)
function leapyears() {
    console.log("Schaltjahre von 1900 bis 2021:");
    for (let index = 1900; index < 2021; index++) {
        if ((index % 4 == 0 && index % 100 != 0) || index % 400 == 0) {
            console.log(index);
        }
    }
}
//leapyears();
//Aufgabe 6
//a)
function stringStairs() {
    let stairs = "";
    for (let index = 0; index < 7; index++) {
        stairs += "#";
        console.log(stairs);
    }
}
//stringStairs();
//b)
function fizzBuzz() {
    for (let index = 0; index < 100; index++) {
        if (index % 3 == 0) {
            console.log("Fizz");
        }
        else if (index % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(index);
        }
    }
}
//fizzBuzz();
//c)
function fizzBuzz2() {
    for (let index = 1; index < 100; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (index % 3 == 0) {
            console.log("Fizz");
        }
        else if (index % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(index);
        }
    }
}
//fizzBuzz2();
//d)
function schachbrett() {
    let schachbrett = "";
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            schachbrett += ((x + y) % 2 == 0) ? "#" : " ";
        }
        schachbrett += "\n";
    }
    return schachbrett;
}
//console.log(schachbrett());
//e)
function schachbrett2(_hoehe, _breite) {
    let schachbrett = "";
    for (let x = 0; x < _hoehe; x++) {
        for (let y = 0; y < _breite; y++) {
            schachbrett += ((x + y) % 2 == 0) ? "#" : " ";
        }
        schachbrett += "\n";
    }
    return schachbrett;
}
//Zum testen
let hoehe = 15;
let breite = 15;
//console.log(schachbrett2(hoehe, breite));
//# sourceMappingURL=script.js.map