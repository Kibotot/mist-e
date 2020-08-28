import React, { useState } from "react";

import Content from "./layout/Content";
import Context from "./Context";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./logic/Error";
import Fetch from "./logic/Fetch";
import EntryMessage from "./layout/EntryMessage";

const Main = () => {
  //Weather for WeatherSearch.js to show data
  //Location is being used for input's value and after for fetching
  //Error is made for handling errors if user did not enter a city's name.
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  //fetching the data from the API and handling errors
  const apiCall = async (e) => {
    //prevents from submiting the form
    e.preventDefault();

    const location = e.target.elements.location.value;

    //if user didn't enter the location, shows error and if necessary, removes weather info temporarily
    if (!location)
      return setError("Please enter the name of the city!"), setWeather(null);

    //fetching from Fetch.js file
    setWeather(await Fetch({ location }));

    //removing error message if weather is displayed
    setError(null);
  };

  /**
   * Content is being used to wrap and for styling purposes
   *
   * if weather is true (if exists) then display WeatherData
   * if error is true (if exists) then display Error
   *
   * Context.js located in Components
   *
   */
  return (
    <Content>
      <EntryMessage />
      <Context.Provider value={{ apiCall, weather, location }}>
        <WeatherSearch />
        {weather && <WeatherData />}
        {error && <Error error={error} />}
      </Context.Provider>
    </Content>
  );
};

export default Main;
