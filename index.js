const apiKey = "9c2063bd4cec5e53c7d18e99ed0a4a68";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = querySelector(".input");
const searchBtn = querySelector(".btn");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "Km/h";

    
}

searchBox.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

