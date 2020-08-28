import React, { useContext } from "react";
import styles from "../App.module.scss";
import Context from "./Context";

const WeatherSearch = () => {
  const { apiCall } = useContext(Context);
  return (
    <div className={styles.searchBox}>
      <form onSubmit={apiCall} className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Enter city..."
          autoComplete="off"
          name="location"
        />
        <div>
          <button className={styles.searchBarButton}>&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
