import React, { Component } from "react";
import fintek from "../assets/images/fintek.svg";
export class UserInput extends Component {
  state = {
    city: "",
  };
  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { city } = this.state;
    this.props.onUserSelection(city);
  };
  render() {
    const { city } = this.state;
    return (
      <div>
        <img src={fintek} className="fintek" alt="Fintek logo" />

        <p className="app-opening">
          Use our weather app to see the weather around the world
        </p>

        <form
          className="user-input-form flex column"
          onSubmit={this.handleSubmit}
        >
          <label className="input-label" htmlFor="cityName">
            City name
          </label>
          <div className="input-btn-container flex">
            <input
              onChange={this.handleChange}
              type="text"
              value={city}
              name="city"
              id="cityName"
              aria-label="Enter a city name "
            />
            <button aria-label="Check">Check</button>
          </div>
        </form>
      </div>
    );
  }
}
