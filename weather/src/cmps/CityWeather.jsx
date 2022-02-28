import React from "react";

export default function CityWeather(weather) {
  const hr =
    Number(weather.location.localtime.slice(11, 13)) < 10
      ? "0" + weather.location.localtime.slice(11)
      : weather.location.localtime.slice(10);
  const month =
    Number(weather.location.localtime.slice(5, 7)) < 10
      ? weather.location.localtime.slice(6, 7)
      : weather.location.localtime.slice(5, 7);
  const day =
    Number(weather.location.localtime.slice(8, 10)) < 10
      ? weather.location.localtime.slice(9, 10)
      : weather.location.localtime.slice(8, 10);
  const hours = weather.forecast.forecastday[0].hour.filter(
    (hour) =>
      new Date(Date.now()).getHours() - Number(hour.time.slice(11, 13)) < 0 &&
      new Date(Date.now()).getHours() - Number(hour.time.slice(11, 13)) >= -5
  );

  return (
    <div className="weather-side flex column auto-center">
      <div className="city-header flex column auto-center">
        <p className="city-name">{weather.location.name}</p>
        <p className="city-country">{weather.location.country.toLowerCase()}</p>
        <p className="city-time">
          {day}/{month}/{weather.location.localtime.slice(2, 4)} at {hr}
        </p>
      </div>
      <div className="city-temp-container flex column auto-center">
        <div className="temp-celsius flex">
        <p className="city-temp">{Math.round(weather.current.temp_c)}</p>
        <div className="celsius"></div>
        </div>
        <p className="city-condition">{weather.current.condition.text}</p>
      </div>
      <div className="stats flex auto-center">
        <div className="dividing-stats flex">

        <div>
          <p className="stat-name">precipitation</p>
          <p className="stat">{weather.current.precip_mm} mm</p>
        </div>
        <div>
          <p className="stat-name">humidity</p>
          <p className="stat">{Math.round(weather.current.humidity)} %</p>
        </div>

        </div>

        <div>
          <p className="stat-name">wind</p>
          <p className="stat">{Math.round(weather.current.wind_kph)} km/h</p>
        </div>
      </div>
      <section className="hours flex auto-center">
        {hours.map((hour) => (
          <div
            className="hourly-temp-container"
            key={Number(hour.time.slice(11, 13))}
          >
            <p className="hour">{hour.time.slice(11)}</p>
            <div className="small-celsius-container flex">
              <p className="hourly-temp">{Math.round(hour.temp_c)}</p>
              <p className="celsius-small"></p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
