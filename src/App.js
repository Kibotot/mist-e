import React from "react";
import "./App.css";

const api = {
  key: "844da775bf941d336e9bc1b95ccaf6b6",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <div className="display">
        <div className="location">
          <svg
            width="33"
            height="50"
            viewBox="0 0 33 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 4.16667C23.0918 4.16667 28.875 9.62083 28.875 15.8375C28.875 22.2812 23.7332 30.6958 16.5 42.2146C9.26681 30.6958 4.125 22.2812 4.125 15.8375C4.125 9.62083 9.90825 4.16667 16.5 4.16667ZM16.5 0C7.84163 0 0 7.08958 0 15.8375C0 24.5833 7.15481 35.025 16.5 50C25.8452 35.025 33 24.5833 33 15.8375C33 7.08958 25.1604 0 16.5 0ZM16.5 22.9167C13.0824 22.9167 10.3125 20.1187 10.3125 16.6667C10.3125 13.2146 13.0824 10.4167 16.5 10.4167C19.9176 10.4167 22.6875 13.2146 22.6875 16.6667C22.6875 20.1187 19.9176 22.9167 16.5 22.9167Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="place">
          <h1 className="city">Zagreb</h1>
          <h3 className="date">15 Aug 2020</h3>
        </div>
        <div className="temperature-box">
          <h2 className="temperature">27°C</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
