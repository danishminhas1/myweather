import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <br></br><br></br><br></br>
          <p className="city">{data.city.toUpperCase()}</p>
          <br></br>
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <p className="desc">{data.weather[0].description.toUpperCase()}</p>
      </div>

      <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
              <h6>Feels Like</h6>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <h6>Humidity</h6>
            </div>
            <div className="pressure">
              {data.main ? <p className='bold'>{data.main.pressure} hPa</p> : null}
              <h6>Pressure</h6>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <h6>Wind Speed</h6>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.deg}°</p> : null}
              <h6>Wind Direction</h6>
            </div>
          </div>







    </div>
  
    
  );
};

export default CurrentWeather;
