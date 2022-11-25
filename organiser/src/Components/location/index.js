import React from "react";
import "./index.css";
import { useState } from "react";

function Location() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState("");
  const success = (position) => {
    console.log(position);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat + long);
    const API_KEY = "2bd4728f9fb05d3db137778f81fa3a31";

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.city);
        const city = data.city;
        setCity(city);
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(parseFloat(data.main.temp - 273.15).toFixed(0));
        console.log(parseFloat(data.main.temp - 273.15).toFixed(0));
        setIcon(data.weather[0].icon);
        console.log(data.weather[0].icon);
      });
  };

  const error = () => {
    alert("Unable to retrieve your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);

  return (
    <div className="WeatherLocation">
      <h4>Hello, It's a lovely day to learn something new</h4>
      <h4>Current Location: {city}</h4>
      <h4>{`temp: ${weather}C`}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="pic of weather"
      ></img>
      {/* <img src={`${baseIconURL}${weatherData.weather[0].icon}@4x.png`}></img> */}
    </div>
  );
}

export default Location;
