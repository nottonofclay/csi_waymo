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

// function giveQuote() {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.api-ninjas.com/v1/quotes?category=");
//     xhr.setRequestHeader("X-Api-Key", "QLN184ypQ23EuvIzNXPkSw==iHeNjZ1rNE6B8njJ");
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
//         {
//             console.log("worked");
//             var randomQuote = JSON.parse(xhr.responseText);
//             alert("\""+ randomQuote[0].quote + "\"" + " -" + randomQuote[0].author);
//         }
//         else if(xhr.readyState == 4)
//         {
//             alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
//         }
//     };
//     xhr.send();
// }

function giveQuote() {
    fetch("https://api.api-ninjas.com/v1/quotes?category=", {
        method: "GET",
        headers:  {
            "X-Api-Key": "QLN184ypQ23EuvIzNXPkSw==iHeNjZ1rNE6B8njJ"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        var randomQuote = data;
        alert("\""+ randomQuote[0].quote + "\"" + " -" + randomQuote[0].author);
    })
    .catch(error => {
        alert(error.message);
    })
}

// function giveMusic() {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://accounts.spotify.com/api/token");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send("grant_type=client_credentials&client_id=3277c3c1f8e242818ff22812ebd2b3c7&client_secret=302cbd82f8be404f9625b248f71d945a");
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4 && xhr.status < 300) {
//             accessToken = JSON.parse(xhr.responseText);
//             // console.log(accessToken);
//             // console.log(accessToken.access_token);
//             giveArtist(accessToken)
//         }
//     };
// }

function giveMusic() {
    fetch ("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials&client_id=3277c3c1f8e242818ff22812ebd2b3c7&client_secret=302cbd82f8be404f9625b248f71d945a"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        accessToken = data;
        console.log(accessToken);
        giveArtist(accessToken);
    })
    .catch(error => {
        alert(error.message);
    })
}
function giveArtist(accessToken) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg");
    xhr.setRequestHeader("Authorization", "Bearer " + accessToken.access_token);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status < 300) {
            var artist = JSON.parse(xhr.responseText);
            console.log(artist);
        }
    };
    xhr.send();
}
function giveArtist(accessToken) {
    fetch("https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg", {
        method: "GET",
        headers: {
            
        }
    })
}