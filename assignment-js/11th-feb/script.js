const userInput = document.querySelector("#userInput");
const temperature = document.querySelector("#temp");
const temperatureImg = document.querySelector("#weatherImg");
const forecastContainer = document.querySelectorAll("#forecast");
const getData = async (event) => {
  if (!userInput.value) {
    alert("Enter Your City Name");
  }
  event.preventDefault();
  const city = userInput.value ? userInput.value : "London";
  const fetchData = await fetch(
    // `http://api.weatherapi.com/v1/current.json?key=b11a7755c1f247c2995112058231102&q=${city}&days=5&aqi=no&alerts=no`
    `http://api.weatherapi.com/v1/forecast.json?key=b11a7755c1f247c2995112058231102&q=${city}&days=5&aqi=no&alerts=no`
  );
  const data = await fetchData.json();
  if (!data.error) {
    console.log(data);
    temperature.innerText = data.current.temp_c;
    temperatureImg.src = data.current.condition.icon;
    console.log(data.forecast);
    data.forecast.forecastday.forEach((forecastData) => {
      console.log(forecastData);
      createElement();
    });
  } else {
    alert(data.error.message);
  }
};

function createElement() {
  const element = document.createAttribute("div");
  element.innerHTML = `
  <div class="flex items-center flex-col" id="forecast">
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                alt="weather-condition-img"
                class="h-3/5 w-3/5"
                id="forecast_img"
              />
              <h6 class="text-xl" id="forecast_temp">34</h6>
              <h6 class="text-xl" id="forecast_day">Thur</h6>
            </div>
  `;
  forecastContainer.appendChild = element;
}
