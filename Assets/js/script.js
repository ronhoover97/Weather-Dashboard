$(document).ready(function () {
  $("#submitWeather").click(function () {
    var city = $("#city").val();
    if (city != "") {
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q= " +
          city +
          "&units=imperial" +
          "&appid=63a671d7f58435ee5a9c3efa02d379b9",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
          var widget = show(data);
          $("#show").html(widget);
          $("#city").val("");
        },
      });
    } else {
      $("#error").html("Please enter a city!");
    }
  });
});
function show(data) {
  return (
    "<h2><strong>Current Weather in</strong>: " +
    data.name +
    "</h2>" +
    "<h3><strong>Desc</strong>: <img src='http://openweathermap.org/img/w/" +
    data.weather[0].icon +
    ".png'> " +
    data.weather[0].description +
    "</h3>" +
    "<h3><strong>Temp</strong>: " +
    data.main.temp +
    " F</h3>" +
    "<h3><strong>Wind</strong>: " +
    data.wind.speed +
    " mph</h3>" +
    "<h3><strong>Humidity</strong>: " +
    data.main.humidity +
    "%</h3>"
  );
}
