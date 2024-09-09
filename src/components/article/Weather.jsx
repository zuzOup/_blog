import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { forecast } from "../articlehelpers";

const weatherCards = [
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908363/0_lzpanv.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908364/1_v680fw.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908366/2_bqrqdl.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908367/3_ztyepm.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908368/4_ahv01e.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908369/5_wbix9e.png",
  "https://res.cloudinary.com/dlvjx6msb/image/upload/v1725908362/6_mtmsk9.png",
];

function useVeryGutWeather({ weatherData, date }) {
  const [temp, setTemp] = useState({ min: "", max: "", feel: "", mean: "" });
  const [isForecast, setisForecast] = useState(0);

  useEffect(() => {
    fetch(
      `https://archive-api.open-meteo.com/v1/archive?latitude=${weatherData.latitude}&longitude=${weatherData.longitude}&start_date=${date}&end_date=${date}&hourly=temperature_2m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York`
    )
      .then((blob) => blob.json())
      .then((res) => {
        const min = Math.round(res.daily.temperature_2m_min[0]);
        const max = Math.round(res.daily.temperature_2m_max[0]);
        const f = res.hourly.apparent_temperature.slice(8, 20);
        const feel = Math.round(f.reduce((a, c) => a + c, 0) / f.length);
        const m = res.hourly.temperature_2m.slice(8, 20);

        const mean = Math.round(m.reduce((a, c) => a + c, 0) / m.length);

        setTemp({ min: min, max: max, feel: feel, mean: mean });

        if (weatherData.overwrite) {
          setisForecast(weatherData.overwrite);
        } else {
          setisForecast(forecast(res));
        }
      });
  }, [date, weatherData]);

  return [temp, isForecast];
}

function Weather({ weatherData, date }) {
  const [temp, isForecast] = useVeryGutWeather({ weatherData, date });

  return (
    <div className="weather">
      <div
        className="weather_bck"
        style={{
          backgroundImage: `url(${weatherCards[isForecast]}),url("/weather/${isForecast}.png")`,
        }}
      >
        <div>
          <div className="weatherMean">{temp.mean}°</div>
          <div className="weatherDiv">
            <div>Pocit: {temp.feel}°</div>
            <div>Min: {temp.min}°</div>
            <div>Max: {temp.max}°</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
Weather.propTypes = {
  weatherData: PropTypes.object,
  date: PropTypes.string,
};
