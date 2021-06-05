import * as Http from "http";
//import * as Url from "url";

export namespace a3_2 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    let q: URL = new URL(_request.url, "https://gissose2021soren.herokuapp.com/");
    let qdata: FormElements = {firstname: q.searchParams.get("firstname"), lastname: q.searchParams.get("lastname"), email: q.searchParams.get("email")};
    if (q.pathname == "/html") _response.write(htmlResponse(qdata));
    if (q.pathname == "/json") _response.write(JSON.stringify(qdata));
    _response.end();
  }
}

function htmlResponse(data: FormElements): string {
  return "<div id='htmlResponse'> <p id='fnResponse'>Firstname: " + data.firstname + "</p>" +
         "<p id='lnResponse'>Lastname: " + data.lastname + "</p>" + 
         "<p id='emailResponse'>Email: " + data.email + "</p></div>";
}

interface FormElements {
  firstname: string;
  lastname: string;
  email: string;
}