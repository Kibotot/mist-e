import React, { useState } from "react";
import "./App.scss";

const api = {
  key: "d15bb117e41e31696ae5988087d4fb48",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (date) => {
    let months = [
      "Siječanj",
      "Veljača",
      "Ožujak",
      "Travanj",
      "Svibanj",
      "Lipanj",
      "Srpanj",
      "Kolovoz",
      "Rujan",
      "Listopad",
      "Studeni",
      "Prosinac",
    ];
    let days = [
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "Četvrtak",
      "Petak",
      "Subota",
      "Nedjelja",
    ];
    // let months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    // let days = [
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    //   "Sunday",
    // ];

    let day = days[date.getDay() - 1];
    let dateNum = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day}, ${dateNum}. ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.floor(weather.main.temp)}°C</div>
              <div className="weather">
                <h2>Vlažnost zraka {weather.main.humidity}%</h2>
                <h2>Osjet {Math.floor(weather.main.feels_like)} °C </h2>
                <h2>Vjetar {weather.wind.speed} km/h</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="entryMessage">
            <h1>Mist-e</h1>
            <h1>Weather App </h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
