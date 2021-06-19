"use strict";
var a3_4;
(function (a3_4) {
    let path;
    let responseDiv = document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", function () {
        path = "/add";
        handleSubmit();
    });
    document.getElementById("retriveFromDB").addEventListener("click", function () {
        path = "/retrive";
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
        if (path == "/retrive") {
            responseDiv.innerHTML = "";
            console.log("Retrieved JSON", JSON.parse(responseText));
            let responseJSON = JSON.parse(responseText);
            for (let i = 0; i < responseJSON.length; i++) {
                let temp = document.createElement("div");
                temp.className = "databaseEntry";
                temp.innerHTML = "id: " + responseJSON[i]._id +
                    "<br> firstname: " + responseJSON[i].firstname +
                    "<br> lastname: " + responseJSON[i].lastname +
                    "<br> email: " + responseJSON[i].email + "<br>";
                let tempDelete = document.createElement("button");
                tempDelete.className = "deleteBtn";
                tempDelete.addEventListener("click", async function () {
                    await fetch("http://localhost:8100/delete?_id=" + responseJSON[i]._id, { method: "get" }); //todo change to heroku
                    temp.innerHTML = "deleted";
                });
                tempDelete.appendChild(document.createTextNode("Delete"));
                temp.appendChild(tempDelete);
                responseDiv.appendChild(temp);
            }
        }
        else if (path == "/add") {
            console.log(responseText);
            showResponse(responseText);
            let form = document.getElementById("formDiv");
            form.reset();
        }
    }
    function showResponse(text) {
        responseDiv.innerHTML = text;
    }
})(a3_4 || (a3_4 = {}));
//# sourceMappingURL=script.js.map