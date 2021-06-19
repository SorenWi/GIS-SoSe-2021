import * as Http from "http";
import * as Mongo from "mongodb";

export namespace a3_4 {

    let collection: Mongo.Collection;
    let databaseURL: string = "mongodb+srv://admin:GxyVgPpJpaJI3rL3@clusterzero.oy0md.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    startServer(port);
    connectToDatabase(databaseURL);

    async function connectToDatabase(url: string): Promise<void> {
        console.log("Connecting to Database");
        let options: Mongo.MongoClientOptions =  {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        collection = mongoClient.db("Test").collection("UserData");
        console.log("Database connection", collection != undefined);
    }

    function startServer(port: number | string): void {
        console.log("Starting server");
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);  
    }
   
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        console.log("Request URL", _request.url);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        
        let q: URL = new URL(_request.url, "https://gissose2021soren.herokuapp.com/");
        let qdata: FormElements = {firstname: q.searchParams.get("firstname"), lastname: q.searchParams.get("lastname"), email: q.searchParams.get("email")};

        if (q.pathname == "/add") {
            collection.insertOne(qdata);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.write("Added {firstname: " + qdata.firstname + ", lastname: " + qdata.lastname + ", email: " + qdata.email + "} to Database");
        } else if (q.pathname == "/retrive") {
            let collectionData: CollectionData[] = await collection.find().toArray();
            let cDataJSON: string = JSON.stringify(collectionData);
            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.write(cDataJSON);
        } else if (q.pathname == "/delete") {
            _response.write("entry deleted");
            collection.deleteOne({_id: new Mongo.ObjectId(q.searchParams.get("_id"))});
        }
        _response.end();
    }

    interface FormElements {
        firstname: string;
        lastname: string;
        email: string;
    }

    interface CollectionData extends FormElements {
        _id: string;
    }
}
