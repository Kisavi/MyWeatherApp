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
    let Api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54fdf9a20ad41b91f02e0e541cafadd9`
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

//getting info when user presses MyLocation button

function getLocation() {
    navigator.geolocation.getCurrentPosition(userPosition);

    function userPosition(position) {
        // console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;

        const API = "54fdf9a20ad41b91f02e0e541cafadd9";
        const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=54fdf9a20ad41b91f02e0e541cafadd9`;

        fetchData(base);
    };
};

function fetchData(base) {
    fetch(base)
        .then(apiInfo)
        .then(apiData)

    function apiInfo(response) {
         console.log(response);
        return response.json();
    };

    function apiData(data) {
        console.log(data)
        if (data.cod === "404") {
            correct.classList.add("message-error");
            correct.textContent = `${inputtxt.value} is not a valid City Name`;
        } else {
            correct.textContent = "Fetching the weather data..."

            var theDelay = 1;
            var timer = setTimeout("displayTemperature()", theDelay * 900)

            temperature.textContent =
                Math.floor(data.main.temp - kelvin);
            area.textContent = data.name + "," + data.sys.country;
            description.textContent = data.weather[0].description;
            humidity.textContent = data.main.humidity + "%";
            wind.textContent = data.wind.speed + "km/h";
            const icon = data.weather[0].icon;
            weathericon.innerHTML = `<img src="icons/${icon}.png" height="65em">`;
        };
    };
};