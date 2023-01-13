function displayTemperature(responce){
  let temperatureElement= document.querySelector("#temperature");
  let cityElement= document.querySelector("#city");
  let discriptionElement= document.querySelector("#discription");
  temperatureElement.innerHTML= math.round(responce.data.main.temp);
  cityElement.innerHTML=responce.data.name;
  discriptionElement.innerHTML=responce.data.weather[0].discription;
  humidityElement.innerHTML=responce.data. main.humidity;
  wind.innerHTML= math.round(responce.data.wind.speed);
}
let apiKey = "c4bta66aea564d54oe4a3a79c0a4f28c";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={New Jersey}&key={apiKey}&units=metric";
  

axios.get(URL).then(displayTemperature)