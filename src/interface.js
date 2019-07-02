$(document).ready(function() {
  console.log('ready!');

  $.get("http://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=62804b7d2f4774c56b134ebc2c182dee", function(londonWeather) {
    $( "#londonWeatherDescription" ).text(londonWeather.weather[0].description)
  })

  $.get("https://api.noopschallenge.com/hexbot", function(hexBot) {
    $( "#hexBot" ).text(hexBot.colors[0].value)
  })


});
