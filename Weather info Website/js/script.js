
// Api Key From Open Weather Map
const apiKey = "20ae29154107f7e4dfa6cdd7fb08ebb1"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";


// Assigning variables to the Elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// Creating a Function for the Api Call
async function checkWeather(city) {
  // city here will be the user input which is an argument when the function is been called 
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


  // Display if the User input is incorrect 
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    //   console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c"; // Rounding up the result to render without decimal 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



    // Images to reflect the current weather condition. 
    // 
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.scr = "assets/image/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.scr = "assets/image/mist.png";
    }


    // Displayed if the user input is correct 
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}


//  Adding an Event Listener to the search button when clicked it calls the function above.
 
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
