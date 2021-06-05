namespace a3_2 {
    let path: string;
    document.getElementById("submitHTML").addEventListener("click", function(): void {
        path = "/html";
        handleSubmit();
    });
    document.getElementById("submitJSON").addEventListener("click", function(): void {
        path = "/json";
        handleSubmit();
    });

    async function handleSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gissose2021soren.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += path + "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
        showResponse(responseText);
        console.log(responseText);     
    }

    function showResponse(response: string): void {
        let responseDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + response;
    }
}