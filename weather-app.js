let grabDate = document.querySelector("#date");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
grabDate.innerHTML = `${day}, ${hour}:${minute}`;

function showValues(response) {
  let city2 = document.querySelector("#city-input");
  city2 = city2.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city2;
  let temp = response.data.temperature.current;
  let temps = document.querySelector("#temps");
  temps.innerHTML = temp;
}

function callAxios(event) {
  event.preventDefault();
  let city1 = document.querySelector("#city-input");
  city1 = city1.value;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city1}&key=at32a2043d2f18b00363437fb0ffa1ob&units=metric`;

  axios.get(url).then(showValues);
}

let grabForm = document.querySelector("#form");
grabForm.addEventListener("submit", callAxios);
