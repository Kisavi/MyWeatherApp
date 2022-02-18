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

function requestApi(city) {
    let Api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54fdf9a20ad41b91f02e0e541cafadd9`
    correct.textContent = ""
    correct.classList.remove("message-error");
    correct.classList.add("message-appended")

    fetchData(Api)
};

//hiding and displaying the two containers upon button clicks
document.getElementById("userdevicelocation").addEventListener("click", combinedFunctions)

function combinedFunctions() {
    displayTemperature();
    getLocation();
};

let x = document.getElementById("weather");
let y = document.getElementById("locationweather");
let z = document.getElementById("toparrow");

function displayTemperature() {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
};

document.getElementById("toparrow").addEventListener("click", hideTemperature)

function hideTemperature() {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
};