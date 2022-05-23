import React from "react";

export default function WeatherBlock() {
  let weatherData = {
    date: "Tuesday 3/19/22 10am",
    description: "rainy",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    temp: "40",
  };
  return (
    <ul>
      <li>Last updated: {weatherData.date}</li>
      <li>{weatherData.description}</li>
      <div className="clearfix">
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          className="float-left"
          id="icon"
        />
        <span class="tempNumber">
          {weatherData.temp}
          <span className="tempElement"> ºF </span>
        </span>
      </div>
    </ul>
  );
}
