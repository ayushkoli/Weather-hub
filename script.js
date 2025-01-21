const apiKey = "2f4cf1800da4939f3ba3fe84fd648c9c"; // Replace with your OpenWeatherMap API key
const weatherResult = document.getElementById("weatherResult");
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");

searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found.");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  document.getElementById("cityName").textContent = `Weather in ${name}`;
  document.getElementById("temperature").textContent = `Temperature: ${main.temp}°C`;
  document.getElementById("description").textContent = `Condition: ${weather[0].description}`;
  document.getElementById("humidity").textContent = `Humidity: ${main.humidity}%`;
}

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchButton.click(); // Simulate button click when Enter is pressed
    }
  });