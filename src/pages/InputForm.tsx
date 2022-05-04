import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryDetails from "./CountryDetails";

const InputForm = () => {
    const [CountryName,SetCountryName] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e:any) => {
        SetCountryName(e.target.value);
       
        
    };

    const handleSubmit = (e:any) => {
        e.preventDefault() ;
        navigate("/CountryDetails")
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
          <label>
           Country Name:
          <input type="text" onChange={handleInputChange} name="Country-Name" />
          </label>
          <button type="submit" >Get Data</button>
          </form>
        </div>
    )   

}

export default InputForm ;