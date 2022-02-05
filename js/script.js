let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elWrapper = document.querySelector(".weather");

const weatherAppRender = function (arr) {
     const html = `
               <h2 class="wearher__name">${arr.name}</h2>
               <div class="weather__country">Country: ${arr.sys.country}</div>
               <div class="weather__temper">${arr.main.temp}°C</div>
               <div class="weather__speed">Speed: ${arr.wind.speed}</div>
     `
     elWrapper.innerHTML = null;
     elWrapper.insertAdjacentHTML("beforeend", html)
}

const getLocationData = function (location) {
     const apiRequest = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
          .then(res => res.json())
          .then(data => weatherAppRender(data));




     return apiRequest
}


elForm.addEventListener("submit", function (e) {
     e.preventDefault()

     let inputValue = elFormInput.value;

     getLocationData(inputValue)
});

// base: "stations"
// clouds: {all: 66}
// cod: 200
// coord: {lon: -0.1257, lat: 51.5085}
// dt: 1644007161
// id: 2643743
// main: {temp: 277.91, feels_like: 273.1, temp_min: 276.03, temp_max: 279.26, pressure: 1017, …}
// name: "London"
// sys: {type: 2, id: 2019646, country: 'GB', sunrise: 1643960063, sunset: 1643993664}
// timezone: 0
// visibility: 10000
// weather: [{…}]
// wind: {speed: 7.72, deg: 250}
// [[Prototype]]: Object