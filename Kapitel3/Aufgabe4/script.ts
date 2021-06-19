namespace a3_4 {
    let path: string;
    let responseDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", function(): void {
        path = "/add";
        handleSubmit(); 
    });
    document.getElementById("retriveFromDB").addEventListener("click", function(): void {
        path = "/retrive";
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

        if (path == "/retrive")  {
            responseDiv.innerHTML = "";
            console.log("Retrieved JSON", JSON.parse(responseText));
            let responseJSON: CollectionData[] = JSON.parse(responseText);

            for (let i: number = 0; i < responseJSON.length; i++) {
                let temp: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                temp.className = "databaseEntry";
                temp.innerHTML = "id: " + responseJSON[i]._id + 
                                 "<br> firstname: " + responseJSON[i].firstname +
                                 "<br> lastname: " + responseJSON[i].lastname +
                                 "<br> email: " + responseJSON[i].email + "<br>";

                let tempDelete: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
                tempDelete.className = "deleteBtn";
                tempDelete.addEventListener("click", async function(): Promise<void> {
                    await fetch("https://gissose2021soren.herokuapp.com/delete?_id=" + responseJSON[i]._id, {method: "get"}); //todo change to heroku
                    temp.innerHTML = "deleted";
                } );

                tempDelete.appendChild(document.createTextNode("Delete"));
                temp.appendChild(tempDelete);
                responseDiv.appendChild(temp);
            }
        } else if (path == "/add") {
            console.log(responseText);
            showResponse(responseText);
            let form: HTMLFormElement = <HTMLFormElement>document.getElementById("formDiv");
            form.reset();
        }    
    }

    function showResponse(text: string): void {
        responseDiv.innerHTML = text;
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