
//print the country names from restcountries:
const url = "https://restcountries.com/v3.1/all";
const result = fetch(url);
result
  .then((data) => data.json())
  .then((countries) => {
    for (let i = 0; i < countries.length; i++) {
      console.log(countries[i].name.common);
    }
  });

//session task display the console values to htmlpage:
const result1 = fetch("https://restcountries.com/v3.1/all");
result1
  .then((data) => data.json())
  .then((restcountries) => {
    for (let i = 0; i < restcountries.length; i++) {
      console.log(restcountries[i]);
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
         <div class="containner">
           <div class="card">
           <div class="card-header">${restcountries[i].name.common}</div>
             <img src="${restcountries[i].flags.png}" class="card-img-top" alt="country-flag">
             <div class="card-body">
               <p class="card-text"><b><i>Capital: ${restcountries[i].capital}</i></b></p>
               <p class="card-text"><b><i>Region: ${restcountries[i].region}</b></p>
               <p class="card-text"><b><i>SubRegion: ${restcountries[i].subregion}</i></b></p>
               <p class="card-text"><b><i>Population: ${restcountries[i].population}</i></b></p>
               <p class="card-text"><b><i>Country Code: ${restcountries[i].cca3}</i></b></p>
               <button class="btn btn-success" onclick="getWeatherData('${restcountries[i].name.common}')">Click for Weather</button>
               </div>
             </div>
           </div>
        </div>`;
         document.body.append(div);
    }
});
function getWeatherData(restCountryName) {
// Use restCountryName in your fetch request to get weather data.
    var apiKey = "3fc14d7d508443eb021ddebb2e677319";
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;
  
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        var weatherCountryName = weatherData.name;
  
        if (weatherCountryName === restCountryName) {
          alert(
            `Weather in ${weatherData.name}: ${weatherData.main.temp_min}°C`
          );
        } else {
          alert("Country names do not match");
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert`Error fetching weather data.`;
      });
    }
    
  

