import axios from "axios";
import React, { useEffect, useState }  from "react";

const API_ENDPOINT = `http://api.weatherstack.com/current`;
const API_KEY = "548e0f50f87a7c131a56fd10f6df3358" ;

const WeatherDetails = ()=> {
    const [WeatherData,setWeatherData] = useState("");
  
  useEffect(() => {
    async function triggerApi() {
      try {
      
        const response = await axios.get(API_ENDPOINT, {
          params: {
            access_key: API_KEY,
          },
        });
        setWeatherData(response.data);
        console.log(WeatherData);
        
      } catch (e: any) {
        console.log("Error");
      } 
    }
     triggerApi();
  }, []);
    return (
        <div className="Weather-Card">
            <h1>Temperature:</h1>
            <h1>Weather Icon:</h1>
            <h1>Wind Speed:</h1>
            <h1>Time Zone Id:</h1>

        </div>
    );
}

export default WeatherDetails ;