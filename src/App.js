import { useEffect } from "react";
import "./style/style.css";

function App() {
  const API_KEY = "280d907cafe3e263b96e3b945a9562cc";
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    search("LONDON");
  }, []);

  return (
    <div className="App">
      <div className="weather-widget">
        <div className="search-bar">
          <input type="text" placeholder="Search for a city" />
          <button>Submit</button>
        </div>
        <div className="weather-cards">
          <div className="weather-card">
            <h2>Paris</h2>
            <p>9°C</p>
            <div className="weather-icon">🌧️</div>
          </div>
          <div className="weather-card">
            <h2>Katowice</h2>
            <p>5°C</p>
            <div className="weather-icon">☀️</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
