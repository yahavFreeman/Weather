import React, { Component } from "react";
import CityLocation from "../cmps/CityLocation";
import CityWeather from "../cmps/CityWeather";
import { UserInput } from "../cmps/UserInput";
import { setCity } from "../services/cityService";

export default class Home extends Component {
  state = {
    city: "",
    weather: null,
  };

  userSelection = async (city) => {
    // this.setState(prevState=>({city:{...prevState.city, name:cityInput}}))
    const weather = await setCity(city);
    this.setState({ city, weather }, () => {
      console.log(this.state.weather);
    });

    // this.props.setCity(city)
  };

  render() {
    const { weather } = this.state;
    return (
      <div className="main-layout">
        <div className="home flex">
          <div className="city-input">
            <UserInput onUserSelection={this.userSelection} />
            {weather && <CityLocation {...weather.location} />}
          </div>
          <div className="city-weather">
            {weather && <CityWeather {...weather} />}
          </div>
        </div>
      </div>
    );
  }
}
