"use strict";
var a3_1;
(function (a3_1) {
    let formData;
    let url = "https://gissose2021soren.herokuapp.com/";
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", click);
    async function click() {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        showResponse(await response.text());
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("resposeDiv");
        responseDiv.innerHTML = response;
    }
})(a3_1 || (a3_1 = {}));
//# sourceMappingURL=script.js.map