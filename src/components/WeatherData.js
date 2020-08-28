import React, { useContext } from "react";
import styles from "../App.module.scss";
import Context from "./Context";
import moment from "moment";
import "moment/locale/hr";

const WeatherData = () => {
  const { weather } = useContext(Context);
  const { name, main, sys, wind } = weather;
  const now = moment();

  return (
    <div>
      <div className={styles.locationBox}>
        <div className={styles.location}>
          {name}, {sys.country}
        </div>
        <div className={styles.date}>{now.format("LLLL")}</div>
      </div>
      <div className={styles.weatherBox}>
        <div className={styles.temp}>{Math.floor(main.temp)}°C</div>
        <div className={styles.weather}>
          <h2>Vlažnost zraka {main.humidity}%</h2>
          <h2>Osjet {Math.floor(main.feels_like)} °C </h2>
          <h2>Vjetar {wind.speed} km/h</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
