let apiKey = "3a829f770a96e34d984658f12d3d8364";

async function getDefaultWeatherData() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=${apiKey}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Boston&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

function updateUI(data) {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");

  let location = document.getElementById("location");
  let img = document.querySelector(".weather__img");
  console.log(img);
  let day = document.getElementById(`day`);
  let temp = Math.round(data.main.temp);
  temperature.innerHTML = temp + "°";
  // data.name + " (" + lat + "°, " + long + "°)";
  description.innerHTML = data.weather[0].main;
  img.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  );

  location.innerHTML = data.name;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();

  day.innerHTML = days[now.getDay()];
  date.innerHTML = now.getDate();
  month.innerHTML = months[now.getMonth()];
  year.innerHTML = now.getFullYear();
}
getDefaultWeatherData(location)
  .then(weatherData => {
    updateUI(weatherData);
  })
  .catch(error => {
    console.log(error);
  });

getDefaultWeatherData();

// async function fetchWeatherByGeo(lat, lon) {
//   const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getWeatherByLocation() {
//   if (navigator.geolocation) {
//     await navigator.geolocation.getCurrentPosition((position) => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
//       fetch(url).then((response) => {
//         response.json().then((data) => {
//           let temperature = document.getElementById("temperature");
//           let description = document.getElementById("description");

//           let location = document.getElementById("location");
//           let img = document.querySelector(".weather__img");
//           let temp = Math.round(data.main.temp);
//           temperature.innerHTML = temp + "°";
//           data.name + " (" + lat + "°, " + long + "°)";
//           description.innerHTML = data.weather[0].main;
//           img.setAttribute(
//             "src",
//             `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
//           );

//           location.innerHTML = data.name;

//           const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//           const months = [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//           ];

//           const now = new Date();

//           day.innerHTML = days[now.getDay()];
//           date.innerHTML = now.getDate();
//           month.innerHTML = months[now.getMonth()];
//           year.innerHTML = now.getFullYear();
//         });
//       });
//     });
//   } else {
//     alert(`Please enable location to get weather`);
//   }
// }

// getWeatherByLocation();
