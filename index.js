const apikey ="75668f96141e171c9f973159d65307f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const error1= document.querySelector(".error1")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
    var data = await response.json();
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="clouds.png"

    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="clear.png"

    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png"

    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png"

    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png"


    }


    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";}

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
if(searchBox.value == null){
    error1.innerHTML="Enter any city name"
}else{
    error1.innerHTML=""

}