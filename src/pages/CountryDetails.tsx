import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import WeatherDetails from "./WeatherDetails";
import { useNavigate } from "react-router-dom";

const CountryDetails = (props:any)=> {
    const [Data,setData] = useState("");
    useEffect(()=> {
        const getData = async ()=> {
            try {
                    const response = await fetch('https://restcountries.com/v3.1/name/india');
                    if(!response.ok) {
                        throw new Error ('This is an HTTP Error');
                    }
                let actualData = await response.json();
                setData(actualData);
                console.log(actualData[0].capital);
                
       
            }
            catch(err) 
            {
                console.log("Error");
                
            }
        }
        getData()

    },[])

    const handleWeatherData = (e:any) => {
        e.preventDefault() ;
        navigate("/WeatherDetails");
    }
    return (
      <>
      <div className="weather-card">
        <h1>Capital Population:{Data}</h1>
        <h1>Latitude:</h1>
        <h1>Longitude:</h1>
        <h1>Country Flag</h1>
        <button onClick={handleWeatherData}>Capital: { Data[0]}</button>

      </div>
      </>
    )
};

 export default CountryDetails ;