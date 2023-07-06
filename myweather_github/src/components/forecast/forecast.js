import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
    <br></br><br></br>
      <div className="title" color="black">Daily Forecast</div>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description.toUpperCase()}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <div><label>Pressure </label></div>
                  <div>{item.main.pressure}</div>
                </div>
                <div className="daily-details-grid-item">
                  <div><label>Humidity</label></div>
                  <div>{item.main.humidity}</div>
                </div>
                <div className="daily-details-grid-item">
                  <div><label>Clouds</label></div>
                  <div>{item.clouds.all}%</div>
                </div>
                <div className="daily-details-grid-item">
                  <div><label>Wind speed</label></div>
                  <div>{item.wind.speed} m/s</div>
                </div>
                <div className="daily-details-grid-item">
                  <div><label>Sea level</label></div>
                  <div>{item.main.sea_level}m</div>
                </div>
                <div className="daily-details-grid-item">
                  <div><label>Feels like</label></div>
                  <div>{item.main.feels_like}°C</div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>

    </>
  );
};

export default Forecast;
