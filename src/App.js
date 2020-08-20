import React from "react";
import "./App.scss";

const api = {
  key: "844da775bf941d336e9bc1b95ccaf6b6",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter city..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
