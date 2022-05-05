import React from "react";

export const AppContext = React.createContext({})

export const AppProvider = (props:any) => {

  const [countryData, setCountryData] = React.useState({});
  const [weatherData, setWeatherData] = React.useState({});

  return(
      <div>
    <AppContext.Provider value={{
      country: countryData,
      setCountry: setCountryData,
      weather: weatherData,
      setWeather: setWeatherData
    }}>
      {props.children}
    </AppContext.Provider>
    </div>
  );
}