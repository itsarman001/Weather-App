const apiKey = "8e373f39191eeca9f9209134004a47be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', () => {
    try {
        const cityName = document.querySelector(".searchBox input");
        checkWeather(cityName.value)
    } catch (error) {
        alert("An Error Occoured" + error)
    }

})

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".weather").style.display = "block"
    } catch (error) {
        alert("faild to load " + error)
    }

}