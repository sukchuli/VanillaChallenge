const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY = "6a5ba3a65013d1067c62b3b917f344b0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=kr&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `(${data.name})`;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("위치정보를 찾을수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);