"use strict";
var a3_1;
(function (a3_1) {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", click);
    async function click() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021soren.herokuapp.com/";
        //let url: RequestInfo = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showResponse(responseText);
        console.log(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("respose");
        responseDiv.innerHTML = response;
    }
})(a3_1 || (a3_1 = {}));
//# sourceMappingURL=script.js.map