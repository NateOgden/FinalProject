// let apiKey = "AIzaSyDCjzOSGnD3dprXILMzm4XGIQ9020fSOIY";

// alternate api key : AIzaSyBz1DePxqAh78Q9ReeFN1y-mhqGz0DCnDc

let returnString = {

    getGif(searchTerm) {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&fmt=json&api_key=dc6zaTOxFJmzC`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
    }
}

console.log(returnString)
module.exports = returnString;


