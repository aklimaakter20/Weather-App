const searchBtn = document.getElementById("search-btn")
searchBtn.addEventListener('click', function(){
    const inputBtn = document.getElementById('input-btn').value
    const weatherIcon = document.querySelector(".weather-icon")
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=1f59d694f917b8092a2911eca6a7b86a')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp)- 273 + "°C";
      document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
      document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";


      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
      }

    })
    // .catch(res => alert("please Type Right City Name"))
})