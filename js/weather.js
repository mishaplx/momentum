export default function () {
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const weatherDescriptionWind = document.querySelector(
    ".weather-description-wind"
  );
  const weatherDescriptionHumidity = document.querySelector(
    ".weather-description-humidity"
  );
  const buttonRu = document.querySelector(".ru");
  const buttonEn = document.querySelector(".en");
  const city = document.querySelector(".city");
  city.addEventListener("change", function () {
    localStorage.setItem("location", city.value);
  });
  if (localStorage.getItem("location") !== city.value) {
    city.value = localStorage.getItem("location");
  }
  const greetingTranslation = {
    ru: { speed: "скорость ветра", humidity: "Влажность" },
    en: { speed: "speed wind", humidity: "humidity" },
  };

  async function getWeather(languages) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languages}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    if (languages == 'ru'){
      weatherDescription.textContent = data.weather[0].description;
      weatherDescriptionWind.textContent = `${greetingTranslation.ru.speed} ${Math.floor(data.wind.speed)} m/c`;
      weatherDescriptionHumidity.textContent = `${greetingTranslation.ru.humidity} ${data.main.humidity} %`;
    }
    else if (languages == 'en'){
      weatherDescription.textContent = data.weather[0].description;
      weatherDescriptionWind.textContent = `${greetingTranslation.en.speed} ${Math.floor(data.wind.speed)} м/c`;
      weatherDescriptionHumidity.textContent = `${greetingTranslation.en.humidity} ${data.main.humidity} %`;
    }
 
  }
  getWeather("en");

  city.addEventListener("change", getWeather);
  buttonRu.addEventListener("click", () => {
    getWeather("ru");
  });

  buttonEn.addEventListener("click", () => {
    getWeather("en");
  });
}
