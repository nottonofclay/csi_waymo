var baseURL = "https://v2.jokeapi.dev";
var categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
var params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];


function giveJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev" + "/joke/" + categories.join(",") + "?" + params.join("&"));
    xhr.onreadystatechange = function() {
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
    };
    xhr.send();
}

function giveQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.api-ninjas.com/v1/quotes");
    xhr.setRequestHeader("X-Api-Key", "QLN184ypQ23EuvIzNXPkSw==iHeNjZ1rNE6B8njJ");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
        {
            var randomQuote = JSON.parse(xhr.responseText);
            alert(randomQuote.q);
        }
        else if(xhr.readyState == 4)
        {
            alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
        }
    };
    xhr.send();
}
