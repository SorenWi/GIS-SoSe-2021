namespace a3_1 {
    let submitBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitBtn");
    submitBtn.addEventListener("click", click);
    
    async function click(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021soren.herokuapp.com/";
        //let url: RequestInfo = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();  
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