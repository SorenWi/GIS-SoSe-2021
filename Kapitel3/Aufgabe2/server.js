"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a3_2 = void 0;
const Http = require("http");
//import * as Url from "url";
var a3_2;
(function (a3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = new URL(_request.url, "https://gissose2021soren.herokuapp.com/");
        let qdata = { firstname: q.searchParams.get("firstname"), lastname: q.searchParams.get("lastname"), email: q.searchParams.get("email") };
        if (q.pathname == "/html")
            _response.write(htmlResponse(qdata));
        if (q.pathname == "/json")
            _response.write(JSON.stringify(qdata));
        _response.end();
    }
})(a3_2 = exports.a3_2 || (exports.a3_2 = {}));
function htmlResponse(data) {
    return "<div id='htmlResponse'> <p id='fnResponse'>Firstname: " + data.firstname + "</p>" +
        "<p id='lnResponse'>Lastname: " + data.lastname + "</p>" +
        "<p id='emailResponse'>Email: " + data.email + "</p></div>";
}
//# sourceMappingURL=server.js.map