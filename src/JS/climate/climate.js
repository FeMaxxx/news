import { renderWeather } from "./renderWeatherCard";
const apiKey = "3a829f770a96e34d984658f12d3d8364";

async function getAndRenderNewYorkWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    console.error(error);
  }
}

async function fetchWeatherData(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      const data = await fetchWeatherData(latitude, longitude);
      renderWeather(data);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

getAndRenderNewYorkWeather();
// getWeatherByLocation();
