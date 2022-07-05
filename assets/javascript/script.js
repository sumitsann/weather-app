var submit = document.querySelector("#submitButton");

submit.addEventListener("click", getWeatherInfo);

//cityName.innerHTML = " ";

function getWeatherInfo() {
  var cityInput = document.querySelector("#cityInput");
  var cityName = document.querySelector("#cityName");
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityInput.value +
      "&appid=5920d3349ad12f44d02077321d1619e6"
  )
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < 5; i++) {
        document.querySelector("#day" + (i + 1) + "Temp").innerHTML =
          "Temp: " +
          Number(data.list[i].main.temp * 1.8 - 460).toFixed(1) +
          "°F";
        document.querySelector("#day" + (i + 1) + "Wind").innerHTML =
          "Wind: " + Number(data.list[i].wind.speed).toFixed(1) + " MPH";

        document.querySelector("#day" + (i + 1) + "Humidity").innerHTML =
          "Humidity: " +
          Number(data.list[i].main.humidity).toFixed(1) +
          " Percent";
        document.querySelector("#image" + (i + 1)).src =
          " http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }

      console.log(data);
    })
    .catch((err) => alert("Something went wrong"));
}

var date = new Date();
var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function checkDay(day) {
  if (day + date.getDay() > 6) {
    return day + date.getDay - 7;
  } else {
    return day + date.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.querySelector("#day" + (i + 1)).innerHTML = weekdays[checkDay(i)];
}

function defaultCity() {
  cityInput = "dallas";
}
