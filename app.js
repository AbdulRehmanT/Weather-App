const API_KEY = "503dfb60224aae837d2a5ac58c9e9274";

const weatherForm = document.querySelector("#get-weather");
const locInput = document.querySelector("#location");
const btn = document.querySelector("#search-btn");
const res = document.querySelector("#result");
const message = document.querySelector("#message");
const locName = document.querySelector("#loc-name");
const temp = document.querySelector("#temperature");
const weatherImg = document.querySelector("#weather-img");

const getWeather = async (event) => {
  try {
    event.preventDefault();
    message.innerText = "Loading....";
    temp.innerText = "";

    const city = locInput.value;

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    message.innerText = "";

    weatherForm.reset();

    locName.innerText = `${response.data.name}`;
    
    const iconCode = response.data.weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/w/${iconCode}.png`;
    

    temp.innerText = `${response.data.main.temp}°`;

    console.log(response.data);
  } catch (error) {
    message.innerText = error?.response?.data?.message || "unknown error";
  }
};

weatherForm.addEventListener("submit", getWeather);
