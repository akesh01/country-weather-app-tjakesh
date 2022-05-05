import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import WeatherDetails from "./WeatherDetails";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { WEATHER_API } from "../utils/constants";

const CountryDetails = (props:any)=> {
    const {context}:any = React.useContext(AppContext)
    const {country}:any = context ;
    const navigate = useNavigate();
   const  getWeatherDetails = () => {
        fetch(`${WEATHER_API}&query=${context.country?.capital?.[0]}`)
        .then((resp) => {
          resp.json().then(data => {
            context.setWeather(data);
            navigate("/WeatherDetails");
          })
        })
        .catch(err => {
          console.log(err);
        })
      }

    return (
  
      <div className="weather-card">
      <h2>Country Details</h2>
          <h3>{country.name?.common}</h3>
          <img src={country.flags.png} />
          <p>Population: {country.population}</p>
          <p>Latitude: {country.latlng?.[0]}, Longitude: {country.latlng?.[1]}</p>
          <button
            onClick={getWeatherDetails}
            className="button"
          >
            Capital Weather
          </button>

      </div>
      
    )
};

 export default CountryDetails ;