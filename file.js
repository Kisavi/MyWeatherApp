//declaring variables
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let area = document.querySelector(".area");
let weathericon = document.querySelector(".weathericon");
const kelvin = 273;
let lon;
let lat;
let inputtxt = document.querySelector("input")
let correct = document.querySelector(".message-appended")

//get info after entering city name
inputtxt.addEventListener("keyup", checkInputValue)

function checkInputValue(e) {
    if (e.keyCode === 13 && inputtxt.value != "") {
        requestApi(inputtxt.value)
    } else if (inputtxt.value == "") {
        window.location.reload()
    }
};