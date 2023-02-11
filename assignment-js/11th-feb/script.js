const userInput = document.querySelector("#userInput");
const forecastContainer = document.querySelector("#forecast");
const card = document.querySelector(".wether_condition");
const getData = async (event) => {
  let data;
  event.preventDefault();
  const city = userInput.value ? userInput.value : "New Delhi";
  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=b11a7755c1f247c2995112058231102&q=${city}&days=5&aqi=no&alerts=no`
  );
  if (!data) {
    card.innerHTML = `<div class="loader"></div>`;
    forecastContainer.innerHTML = "";
  }
  data = await fetchData.json();
  console.log(data);

  if (!data.error) {
    weatherConditon(data.current.temp_c, data.current.condition.icon);
    data.forecast.forecastday.forEach((forecastData) => {
      let icon = forecastData.day.condition.icon;
      let temp = forecastData.day.avgtemp_c;
      let date = forecastData.date;
      userInput.setAttribute("placeholder", data.location.name);
      forecastElement(icon, temp, date);
    });
  } else {
    // alert(data.error.message);
    card.innerHTML = `
    <div>
        <img
        src="./img/404.svg"
        alt="weather-condition-img"
        class="block"
        id="forecast_img"
        />
    </div>
    <h6 class="text-xs" id="forecast_temp">${data.error.message}</h6>
    `;
  }
  userInput.value = "";
};

function forecastElement(icon, temp, date) {
  const element = document.createElement("div");
  element.classList.add("flex", "items-center", "flex-col");
  element.innerHTML = `
    <img
    src=${icon}
    alt="weather-condition-img"
    class=""
    id="forecast_img"
    />
    <h6 class="text-xl text-white" id="forecast_temp ">${temp}</h6>
   
  `;

  forecastContainer.appendChild(element);
}

function weatherConditon(temp, icon) {
  card.innerHTML = `
    <div class="condition__img w-1/2">
        <img
        src="${icon}"
        alt="weather-condition-img"
        id="weatherImg"
        class="scale-[2]"
        />
    </div>
    <div class="conditon__temp w-1/2">
        <span class="text-7xl font-thin text-white" id="temp">${temp}</span>
        <span class="absolute text-2xl font-medium text-white">.C</span>
    </div> 
    `;
}
// <h6 class="text-xs" id="forecast_day">${date}</h6>
