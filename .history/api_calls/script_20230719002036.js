var baseURL = "https://v2.jokeapi.dev";
var categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
var params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];


function giveJoke() {

    xhr.open("GET", baseURL + "/joke/" + categories.join(",") + "?" + params.join("&"));
    setTimeout(processJoke, 1000);
}

function processJoke() {
    if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
    {
        var randomJoke = JSON.parse(xhr.responseText);

        if(randomJoke.type == "single")
        {
            // If type == "single", the joke only has the "joke" property
            alert(randomJoke.joke);
        }
        else
        {
            // If type == "single", the joke only has the "joke" property
            alert(randomJoke.setup);
            alert(randomJoke.delivery);
        }
    }
    else if(xhr.readyState == 4)
    {
        alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
    }
    else {
        alert("didn't work");
        console.log("ready state: " + String(xhr.readyState));
        console.log("status: " + String(xhr.status));
    }
    xhr.send();
}





