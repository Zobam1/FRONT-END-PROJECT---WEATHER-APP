function showValues(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  let temp = Math.round(response.data.temperature.current);
  let temps = document.querySelector("#temps");
  temps.innerHTML = temp;
  let status = document.querySelector("#condition");
  status.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  let iconUrl = response.data.condition.icon_url;
  let icon = document.querySelector("#weather-icon");
  icon.innerHTML = `<img src=${iconUrl} alt="weather-icon">`;
  console.log(response);
  let grabDate = document.querySelector("#date");
  let urlDate = new Date(response.data.time * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[urlDate.getDay()];
  let hour = urlDate.getHours();
  let minute = urlDate.getMinutes();
  grabDate.innerHTML = `${day}, ${hour}:${minute}`;
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

axios
  .get(
    "https://api.shecodes.io/weather/v1/current?query=paris&key=at32a2043d2f18b00363437fb0ffa1ob&units=metric"
  )
  .then(showValues);
