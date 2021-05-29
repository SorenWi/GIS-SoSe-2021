"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a3_1 = void 0;
const Http = require("http"); //import von http
var a3_1;
(function (a3_1) {
    //Ausgabe in der Konsole das der Server gestartet hat
    console.log("Starting server");
    //Setzt Port auf 8100
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Neuer Server wird erstellt
    let server = Http.createServer();
    //Es werden listener für requests und listening hinzugefügt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Ausgabe in der Konsole wenn der Server "zuhört"
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsolenausgabe bei einer Request
        console.log("I hear voices!");
        //Header Eigenschaften setzen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_request.url); //Die URL der Request wird in der Konsole ausgegeben
        _response.write(_request.url); //Die URL der Request wird der response hinzugefügt
        _response.end(); //Ende der Response
    }
})(a3_1 = exports.a3_1 || (exports.a3_1 = {}));
//# sourceMappingURL=server.js.map