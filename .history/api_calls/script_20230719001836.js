var baseURL = "https://v2.jokeapi.dev";
var categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
var params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];
var xhr = new XMLHttpRequest();
xhr.open("GET", baseURL + "/joke/" + categories.join(",") + "?" + params.join("&"));

function giveJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", baseURL + "/joke/" + categories.join(",") + "?" + params.join("&"));


}

function processJoke() {

}





