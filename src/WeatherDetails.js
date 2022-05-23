import React from "react";

export default function WeatherDetails() {
  let weatherData = {
    humidity: "50",
    wind: "5",
  };
  return (
    <ul>
      <li>Humidity:{weatherData.humidity}%</li>
      <li>Wind: {weatherData.wind} mph</li>
    </ul>
  );
}
