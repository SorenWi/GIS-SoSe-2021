"use strict";
var a3_1;
(function (a3_1) {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", click);
    async function click() {
        let url = "https://gissose2021soren.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showResponse(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("resposeDiv");
        responseDiv.innerHTML = response;
    }
})(a3_1 || (a3_1 = {}));
//# sourceMappingURL=script.js.map