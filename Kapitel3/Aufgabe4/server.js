"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a3_4 = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var a3_4;
(function (a3_4) {
    let collection;
    let databaseURL = "mongodb+srv://admin:GxyVgPpJpaJI3rL3@clusterzero.oy0md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseURL);
    async function connectToDatabase(url) {
        console.log("Connecting to Database");
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        collection = mongoClient.db("Test").collection("UserData");
        console.log("Database connection", collection != undefined);
    }
    function startServer(port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log("Request URL", _request.url);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = new URL(_request.url, "https://gissose2021soren.herokuapp.com/");
        let qdata = { firstname: q.searchParams.get("firstname"), lastname: q.searchParams.get("lastname"), email: q.searchParams.get("email") };
        if (q.pathname == "/add") {
            collection.insertOne(qdata);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.write("Added {firstname: " + qdata.firstname + ", lastname: " + qdata.lastname + ", email: " + qdata.email + "} to Database");
        }
        else if (q.pathname == "/retrive") {
            let collectionData = await collection.find().toArray();
            let cDataJSON = JSON.stringify(collectionData);
            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.write(cDataJSON);
        }
        else if (q.pathname == "/delete") {
            _response.write("entry deleted");
            collection.deleteOne({ _id: new Mongo.ObjectId(q.searchParams.get("_id")) });
        }
        _response.end();
    }
})(a3_4 = exports.a3_4 || (exports.a3_4 = {}));
//# sourceMappingURL=server.js.map