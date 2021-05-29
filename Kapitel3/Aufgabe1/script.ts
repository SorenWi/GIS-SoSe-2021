namespace a3_1 {
    let formData: FormData;
    let url: string = "https://gissose2021soren.herokuapp.com/";

    let submitBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitBtn");
    submitBtn.addEventListener("click", click);

    async function click(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get"});
        showResponse(await response.text());
    }

    function showResponse(response: string): void {
        let responseDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("resposeDiv");
        responseDiv.innerHTML = response;
    }

}