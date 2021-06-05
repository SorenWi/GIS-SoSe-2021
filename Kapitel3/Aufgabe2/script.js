"use strict";
var a3_2;
(function (a3_2) {
    let path;
    document.getElementById("submitHTML").addEventListener("click", function () {
        path = "/html";
        handleSubmit();
    });
    document.getElementById("submitJSON").addEventListener("click", function () {
        path = "/json";
        handleSubmit();
    });
    async function handleSubmit() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021soren.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += path + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showResponse(responseText);
        if (path == "/json")
            console.log(JSON.parse(responseText));
        else
            console.log(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + response;
    }
})(a3_2 || (a3_2 = {}));
//# sourceMappingURL=script.js.map