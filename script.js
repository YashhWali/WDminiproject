const weatherData = {
  Sampletown: [
    { day: "Monday", temp: "25°C", desc: "Sunny" },
    { day: "Tuesday", temp: "22°C", desc: "Cloudy" },
    { day: "Wednesday", temp: "28°C", desc: "Sunny" },
    { day: "Thursday", temp: "20°C", desc: "Rainy" },
    { day: "Friday", temp: "24°C", desc: "Partly Cloudy" }
  ],
  Newville: [
    { day: "Monday", temp: "30°C", desc: "Hot" },
    { day: "Tuesday", temp: "29°C", desc: "Sunny" },
    { day: "Wednesday", temp: "31°C", desc: "Hot" },
    { day: "Thursday", temp: "28°C", desc: "Clear" },
    { day: "Friday", temp: "27°C", desc: "Windy" }
  ],
  Oldport: [
    { day: "Monday", temp: "18°C", desc: "Foggy" },
    { day: "Tuesday", temp: "17°C", desc: "Rainy" },
    { day: "Wednesday", temp: "16°C", desc: "Cloudy" },
    { day: "Thursday", temp: "19°C", desc: "Windy" },
    { day: "Friday", temp: "20°C", desc: "Clear" }
  ]
};

function updateWeather(city) {
  document.getElementById("city-name").innerText = `City: ${city}`;
  const forecast = weatherData[city];
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = "";
  forecast.forEach(day => {
    forecastContainer.innerHTML += `
      <div class="day">
        <h3>${day.day}</h3>
        <p class="temp">${day.temp}</p>
        <p>${day.desc}</p>
      </div>
    `;
  });
}

// Load default city
updateWeather("Sampletown");
